<template>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/banner1.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/banner2.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/banner3.jpg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/banner4.jpg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../assets/banner5.jpg" alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
export default {
    name: 'bannerSlider'
}
</script>
<style>
    .carousel-inner{
        height: 100px;
    }
</style>