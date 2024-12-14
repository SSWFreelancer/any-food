import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/HomeView.vue';
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: "/product/:id?",
        name: "product",
        component: ProductView,
        props: true,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router