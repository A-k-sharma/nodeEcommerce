import Vue from 'vue';  
import VueRouter from 'vue-router'
import product from '../components/product.vue'
import homepage from '../components/homepage.vue'
import productList from '../components/productList.vue'



Vue.use(VueRouter)

const routes = [
    {path: '/product', component: product},
    {path:'/', component: homepage},
    {path: '/list', component: productList}
]

const router = new VueRouter({
    routes
})

export default router;