<template>
        <div class="row">
            <div class="col-md-4 imageContainer">
                <img src="https://www.91-img.com/pictures/124371-v7-samsung-galaxy-j8-2018-mobile-phone-large-1.jpg?tr=h-330,q-75" class="productImage" alt="productImage"/>
                <div class="buttons">
                    <button class="btn btn-warning"><i class="fas fa-cart-plus"></i> Add To Cart</button>
                    <button class="btn btn-success"><i class="fas fa-bolt"></i> Buy Now</button>
                </div>
            </div>
            <div class="col-md-8 productDescription">
                <h5>Brand Name</h5>
                <h3>B-GR5046-BWH-CH White & Blue Dial Day & Date Functioning Water Resistant Stainless Steel Bracelet Watch for Men/Boys Analog Watch - For Men</h3>
                <div class="price">
                    <label for="price" class="primaryLabel">Special Price</label>
                    <h4 class="priceTag">$ 254</h4>
                </div>
                <div class="rating">
                    <p>4.5 <i class="fas fa-star"></i> </p>
                </div>
                <h5>Product Quantity</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ducimus sunt quidem quaerat ratione eligendi nemo, quos eum consectetur. Beatae qui repellendus quos quae. Facere earum quisquam repellendus sequi possimus?</p>
                <div class="productExpire">
                    <label class="fadee">Product Expires On</label>
                    <strong>1 year</strong>
                </div>
                <div class="offers">
                    <strong>Available offers</strong>
                    <ul class="offerList">
                        <li><strong>BANK OFFER</strong> OFFER</li>
                        <li><strong>BANK OFFER</strong> OFFER</li>
                        <li><strong>BANK OFFER</strong> OFFER</li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'product'
}
</script>

<style >
    .row{
        margin: 0;
        height: 100%;
    }
    .imageContainer{
        height: 100%;
    }
    .buttons{
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .btn{
        height: 100%;
        border-radius: 2px;
        width: 200px;
        color: antiquewhite;
        font-size: 20px;
        font-weight: bolder;
    }
    .productImage{
        height: calc(100% - 60px);
        width: 100%;
        padding: 20px;

    }
    .productDescription{
        width: 100%;
        height: 100%;
        padding: 20px
    }
    .primaryLabel{
        color: green;
        font-weight: 600;
    }
    .priceTag{
        color: black;
        font-weight: bold;
    }
    .rating{
        color: white;
        background: green;
        border-radius: 20px;
        width: fit-content;
        padding: 0px 15px;
        font-weight: bold;
    }
    .fadee{
        color: darkgray;
        padding: 10px;
    }
    
    .offerList{
        list-style: none;
    }
    .offerList li strong{
        color: green;
    }
</style>