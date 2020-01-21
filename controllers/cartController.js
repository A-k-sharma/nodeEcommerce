const Cart = require('../models/cartSchema');

calculateCartTotal = (products)=>{
    let total=0;
    products.map(item=>{
        total=(item.price * item.quantity)+total;
    })
    return(total) 
}

module.exports={
    createCart: async (req,res)=>{
        const cart = new Cart({
            userEmail : req.body.userEmail,
            products : [],
            total : 0
        })
        cart.save()
        .then(resp=>{
            res.status(200).send(resp);
        })
        .catch(err=>{
            res.status(500).send(err.message);
        })
    },
    addProducts: async (req,res)=>{
        const {productId,productName,quantity,price} = req.body.product;
        Cart.findOne({userEmail: req.body.userEmail})
        .then(resp=>{
            let product= {
                productId: productId,
                productName: productName,
                quantity: quantity,
                price: price
            };
            let temp = resp.products;
            let flag = false;

            if(resp.products.length){
                temp = resp.products.map(item=>{
                    if(item.productId == productId){
                        item.quantity = JSON.parse(item.quantity) + 1;
                        flag= true;
                        return item;
                    }
                    else{
                        return item;
                    }
                })
                if(!flag){
                    temp.push(product);
                }
                let total = calculateCartTotal(temp);
                Cart.findOneAndUpdate({userEmail: req.body.userEmail},{ $set : {products : temp, total: total}})
                .then(response=>{
                    res.send({msg:"card updated",response:response});
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            else{
                temp.push(product);
                let total = calculateCartTotal(temp);
                Cart.findOneAndUpdate({userEmail: req.body.userEmail},{ $set : {products : temp, total: total}})
                .then(response=>{
                    res.send({msg:"card updated",response:response});
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            
        })
    },
    deleteProduct: async (req,res)=>{
        let total=0;
        const {productId, userEmail,quantity} = req.body;
        Cart.findOne({userEmail: userEmail})
        .then(resp=>{
            const newProducts = []; 
            resp.products.map(item=>{
                if(item.productId == productId){
                    if(quantity < item.quantity){
                        item.quantity= item.quantity - quantity;
                        newProducts.push(item);
                    }
                    else if(quantity > item.quantity){
                        res.send("quantity to remove is larger than item in cart")
                    }
                }
                else{
                    newProducts.push(item);
                }
            })            
            let total = calculateCartTotal(newProducts);
            Cart.findOneAndUpdate({userEmail: userEmail},{$set: {products: newProducts, total : total}})
            .then(response=>{
                res.status(200).send(response)
            })
            .catch(err=>{
                console.log(err);
                res.send(err);
            })
        })
        .catch(err=>{
            res.send(err);
        })
    }
}