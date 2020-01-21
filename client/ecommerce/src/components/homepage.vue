<template>
    <div class="homepage">
        <bannerSlider></bannerSlider>
        <div class="explore">
            <button class="btn btn-primary">
                Explore more
            </button>
        </div>
        <offers></offers>
    </div>
</template>

<script>
import bannerSlider from './bannerSlider';
import offers from './offers';

export default {
    name: 'homepage',
    components: {
        bannerSlider,
        offers
    }
}
</script>
<style>
    .homepage{
        text-align: center;
    }
    .explore{
        margin: 15px 0px;
    }
    .carousel-inner{
        height: 100%;
    }
</style>