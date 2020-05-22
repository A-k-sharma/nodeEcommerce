<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title text-center">Lavie</h5>
      <div class="card-buttons">
        <button class="btn btn-warning">
          Add To Card
        </button>
        <button class="btn btn-success">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card{
    .card-body{
        .card-buttons{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>