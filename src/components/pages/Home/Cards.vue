<template>
    <div class="cards">
        <div class="cards__container">
            <Card v-for="card in cards" :key="card.id" :card="card"></Card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {IRestaurant} from "@/mixins/restaurants/index";
import Card from "./Card.vue";

@Component({
    components: {
        Card,
    }
})
export default class Cards extends Vue {
    @Prop () cards: IRestaurant[];
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/home/cards.sass'
</style>