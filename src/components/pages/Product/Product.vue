<template>
    <div class="product">
        <Banner>
            <template v-slot:bg>
                <img :src="product.headerImage " alt="">
            </template>
            <template v-slot:title>
                {{ product.name }}
            </template>
            <template v-slot:subtitle>
                {{ product.cuisines.join(', ') }}
            </template>
            <template v-slot:ratings>
                <div class="banner__rating">
                    <div class="banner__stars">
                        <span v-for="n in 5" :key="n">
                            <img v-if="n <= product.averageRating" src="@/assets/star.svg" alt="">
                            <img v-else src="@/assets/star-stroke.svg" alt="">
                        </span>
                    </div>
                    <span>
                        {{ product.reviews.length }}
                        reviews
                    </span>
                </div>
            </template>
        </Banner>
        <div class="product__nav">
            <div class="product__tab" :class="{ active: selectedItem === tab }" v-for="tab in tabs" :key="tab" @click="selectTab(tab)">
                {{ tab }}
            </div>
        </div>
        <div class="product__body">
            <div class="product__container">
                <Menu v-if="selectedItem === 'Menu'" :menu="product.menu" />
                <Reviews v-else :reviewsIds="product.reviews"/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Reviews from "@/components/pages/Product/Reviews.vue";
import Menu from "@/components/pages/Product/Menu.vue";
import { Component, Mixins } from "vue-property-decorator";
import Restaurants from "@/mixins/restaurants/restaurants";
import {IRestaurant} from "@/mixins/restaurants/index";
@Component({
    components: {
        Banner,
        Reviews,
        Menu,
    }
})
export default class Product extends Mixins(
    Restaurants,
) {
    product: IRestaurant = null;
    tabs = ["Menu", "Reviews"];
    selectedItem = this.tabs[0];

    selectTab(tab: string): void {
        this.selectedItem = tab;
    }

    created() {
        const id = this.$route.params.id;
        this.restaurants.forEach((r) => {
            if (r.id === id) {
                this.product = r
            }
        })
    }
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/product/product.sass'
</style>