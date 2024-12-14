<template>
    <router-link  
        :to="{
            name: 'product',
                params: {
                    id: card.id,
                },
            }"
            class="card"
        >
        <div class="card__image">
            <img :src="card.headerImage" alt="">
        </div>
        <div class="card__wrapper">
            <div class="card__name">
                {{ card.name }}
            </div>
            <div class="card__types">
                {{ card.cuisines.join(', ') }}
            </div>
            <div class="card__rating">
                <div class="card__stars">
                    <span v-for="n in 5" :key="n">
                        <img v-if="n <= card.averageRating" src="@/assets/star.svg" alt="">
                        <img v-else src="@/assets/star-stroke.svg" alt="">
                    </span>
                </div>
                <span>
                    {{ card.reviews.length }}
                    reviews
                </span>
            </div>
            <div class="card__more">
                View Details
            </div>
        </div>
    </router-link>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {IRestaurant} from "@/mixins/restaurants/index";

@Component
export default class Card extends Vue {
    @Prop () card: IRestaurant;
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/home/card.sass'
</style>