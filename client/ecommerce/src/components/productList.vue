<template>
    <div class="container">
        <div>
            <productCard></productCard>
        </div>
    </div>
</template>
<script>
import productCard from './productCard';

export default {
    name: 'productList',
    components: {
        productCard,
    }
}
</script>