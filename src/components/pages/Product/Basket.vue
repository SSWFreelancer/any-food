<template>
    <div class="basket">
        <template v-if="cartItems.length">
            <div class="basket__name">
                Basket
            </div>
            <div class="basket__rows">
                <div class="basket__row" v-for="item in cartItems" :key="item.id">
                    <p>
                        {{ item.name }} ({{ item.quantity }})
                    </p>
                    <p>
                        
                        <span v-if="activeCurrency === 'USD'">
                            {{ item.price.USD * item.quantity }} $
                        </span>
                        <span v-if="activeCurrency === 'EUR'">
                            {{ item.price.EUR * item.quantity }} €
                        </span>
                        <span v-if="activeCurrency === 'RUB'">
                            {{ item.price.RUB * item.quantity }} €
                        </span>
                    </p>
                </div>
            </div>
            <div class="basket__rows">
                <div class="basket__row">
                    <p>
                        Sub-total
                    </p>
                    <p>
                        {{amountCartItems}}
                        <span v-if="activeCurrency === 'USD'">
                            $
                        </span>
                        <span v-if="activeCurrency === 'EUR'">
                            €
                        </span>
                        <span v-if="activeCurrency === 'RUB'">
                            ₽
                        </span>
                    </p>
                </div>
                <div class="basket__row">
                    <p>
                        Delivery costs:
                    </p>
                    <p>
                        FREE
                    </p>
                </div>
                <div class="basket__row total">
                    <p>
                        Total
                    </p>
                    <p>
                        {{amountCartItems}}
                        <span v-if="activeCurrency === 'USD'">
                            $
                        </span>
                        <span v-if="activeCurrency === 'EUR'">
                            €
                        </span>
                        <span v-if="activeCurrency === 'RUB'">
                            ₽
                        </span>
                    </p>
                </div>
            </div>
            <router-link to="/cart" v-if="buttonvisiblity">
                <button>
                    Checkout
                </button>
            </router-link>
        </template>
        <template v-else>

            <router-link class="basket__name" to="/" v-if="linkToHome">
                Back to catalog 
            </router-link>
            <div v-else class="basket__name">
                Select a meal from the list
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CartItem } from "@/store/modules/cart";

@Component
export default class Basket extends Vue {
    @Prop({ default: true }) buttonvisiblity!: boolean;
    @Prop({ default: false }) linkToHome: boolean;

    get cartItems(): CartItem[] {
        return this.$store.state.cart.items;
    }
    get amountCartItems(){
        return this.cartItems.reduce((total, item) => {
            return total + item.price[this.activeCurrency] * item.quantity;
        }, 0);
    }
    get activeCurrency(){
        return this.$store.state.currency.selectedCurrency;
    }
}
</script>

<style lang="sass" scoped>
@import '@/style/basket.sass'
</style>