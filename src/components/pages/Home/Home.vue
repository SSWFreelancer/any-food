<template>
    <div class="home">
        <Banner >
            <template v-slot:subtitle>
                From {{restaurantsCount}} Restaurants
            </template>
        </Banner>
        <Filters :items="allTypes" @filterSelected="applyFilter"/>
        <template v-if="!loaded">
            <div class="loader">
                <span></span>
                <span></span>
            </div>
        </template>
        <Cards v-else :cards="filteredRestaurants"/>
    </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Restaurants from "@/mixins/restaurants/restaurants";
import Banner from "@/components/Banner.vue";
import Filters from "@/components/pages/Home/Filters.vue";
import Cards from "@/components/pages/Home/Cards.vue";
import {IRestaurant} from "@/mixins/restaurants/index";
@Component({
    components: {
        Banner,
        Filters,
        Cards
    }
})
export default class HomeComponent extends Mixins (
    Restaurants
){
    selectedFilter: string = "all";
    loaded: boolean = false;
    mounted() {
        setTimeout(() => this.loaded = true, 1000);
    }
    get restaurantsCount() {
        return this.restaurants.length;
    }
    get allTypes(){
        return [...new Set(this.restaurants.flatMap((r) => r.cuisines))];
    }
    get filteredRestaurants(): IRestaurant[] {
        if (this.selectedFilter === "all") {
            return this.restaurants;
        }
            return this.restaurants.filter((restaurant) =>
                restaurant.cuisines.includes(this.selectedFilter)
        );
    }

    applyFilter(filter: string): void {
        this.selectedFilter = filter;
    }
}
</script>