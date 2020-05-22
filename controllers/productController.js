const product = require('../models/productSchema');

module.exports={
    allProducts: async (req,res)=>{
        console.log(req.query);
        let query = {};
        if(Object.keys(req.query).length){
            query = req.query;
        }
        product.find(query)
        .then(response=>{
            console.log(response);
            res.status(200).send(response);
        })
        .catch(err=>{
            res.status(500).send(err.message);
        })
    },
    addProduct: async (req,res)=>{
        let ct= new Date();
        if(Object.keys(req.body).length){
            const details = new product({
                productName: req.body.productName,
                quantity: req.body.quantity,
                price: req.body.price,
                expireMonths: req.body.expireMonths,
                productId: req.body.productId,
                expireDate: ct.setMonth(ct.getMonth() + req.body.expireMonths)  
            }).save()
            .then(resp=>{
                res.status(200).send(resp);
            })
            .catch(err=>{
                res.status(300).send(err.message);
            })
        }
        else{
            res.status(500).send("Enter Details");
        }
    }
}