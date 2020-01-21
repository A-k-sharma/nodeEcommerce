<template>
    <div class="card">
        <img class="card-img-top" src="../assets/productImage.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Price</p>
            <div class="buttons">
                <button class="btn btn-warning">Add to Cart</button>
                <button class="btn btn-success">Buy Now</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'productCard',
}
</script>
<style scoped>
    .card{
        width: 18rem;
        margin: 10px;
        text-align: center;
        font-weight: bold;
    }
    .card-title{
        font-size: 25px;
        font-weight: bolder;
    }
    .card-body{
        padding: 15px 15px;
    }
    .buttons{
        height: 45px;
    }
    .btn{
        font-size: 16px;
        width: 45%;
    }
</style>