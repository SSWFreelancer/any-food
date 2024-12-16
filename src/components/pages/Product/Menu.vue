<template>
    <div>
        <template v-if="!loaded">
            <div class="loader">
                <span></span>
                <span></span>
            </div>
        </template>
        <div class="menu" v-else>
            <div class="menu__body">
                <div class="menu__dish" v-for="item in items" :key="item.id">
                    <div class="menu__left">
                        <div class="menu__name">
                            {{ item.name }}
                        </div>
                        <div class="menu__ingredients">
                            {{ item.ingredients.join(', ') }}
                        </div>
                        <div class="menu__price" >
                            {{ item.price[activeCurrency] }}
                            <span v-if="activeCurrency === 'USD'">
                                $
                            </span>
                            <span v-if="activeCurrency === 'EUR'">
                                €
                            </span>
                            <span v-if="activeCurrency === 'RUB'">
                                ₽
                            </span>
                        </div>
                    </div>
                    <div class="menu__quantity">
                        <input type="number" v-model="quantities[item.id]" />
                        <div class="menu__buttons">
                            <button @click="decreaseQuantity(item)">
                                -
                            </button>
                            <button @click="increaseQuantity(item)">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Basket/>
        </div>
        {{ cartItems }}
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Dishes from "@/mixins/dishes/dishes";
import {IDish} from "@/mixins/dishes/index";
import Basket from "@/components/pages/Product/Basket.vue";
@Component({
    components: {
        Basket
    }
})
export default class Menu extends Mixins(
    Dishes
) {
    @Prop () menu!: string[]
    items: IDish[] = []
    quantities: Record<string, number> = {};

    loaded: boolean = false;
    mounted() {
        setTimeout(() => this.loaded = true, 1000);
    }
    
    created() {
        const savedCartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");

        this.dishes.forEach((dish) => {
            if (this.menu.includes(dish.id)) {
                this.items.push(dish);
                const savedItem = savedCartItems.find((item: { id: string; quantity: number }) => item.id === dish.id);
                this.$set(this.quantities, dish.id, savedItem ? savedItem.quantity : 0);
            }
        });
    }

    get activeCurrency(){
        return this.$store.state.currency.selectedCurrency;
    }

    increaseQuantity(item: IDish) {
        this.quantities[item.id] += 1;
        const quantity = this.quantities[item.id];
        if(quantity === 1){
            this.$store.dispatch("cart/addToCart", {
                id: item.id,
                name: item.name,
                price: {
                    USD: item.price.USD,
                    EUR: item.price.EUR,
                    RUB: item.price.RUB
                },
                quantity,
            });
        }else{
            this.$store.dispatch("cart/updateQuantity", { 
                id: item.id, 
                price: {
                    USD: item.price.USD,
                    EUR: item.price.EUR,
                    RUB: item.price.RUB
                },
                quantity 
            });
        }
    }

    decreaseQuantity(item: IDish) {
        if (this.quantities[item.id] > 0) {
            this.quantities[item.id] -= 1;
            const quantity = this.quantities[item.id];
            if(quantity === 0){
                this.$store.dispatch("cart/removeFromCart", item.id);
            }else{
                this.$store.dispatch("cart/updateQuantity", 
                { 
                    id: item.id, 
                    price: {
                        USD: item.price.USD,
                        EUR: item.price.EUR,
                        RUB: item.price.RUB
                    },
                    quantity 
                });
            }
        }
    }

}
</script>

<style lang="sass" scoped>
@import '@/style/pages/product/menu.sass'
</style>