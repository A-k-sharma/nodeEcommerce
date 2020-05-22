<template>
  <div class="container">
    <div class="prodcutList">
      <ProductCard></ProductCard>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/productCard.vue";

export default {
  name: "Products",
  components: {
    ProductCard
  }
};
</script>
