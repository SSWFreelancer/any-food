<template>
    <div class="cart">
        <div class="cart__container">
            
            <form class="cart__form" @submit.prevent="submitOrder">
                <div class="cart__input">
                    <span>
                        Name
                    </span>
                    <input v-model="name"  type="text" required>
                </div>
                <div class="cart__input">
                    <span>
                        Phone Number
                    </span>
                    <input v-model="phone" type="tel" required>
                </div>
                <div class="cart__input">
                    <span>
                        Address
                    </span>
                    <textarea v-model="address" required></textarea>
                </div>
                <button>
                    ORDER
                </button>
                <p v-if="orderAccepted" class="cart__success">
                    Your order has been accepted!
                    <br>
                    <router-link to="/">
                        Return to the catalog to continue orders
                    </router-link>
                </p>
            </form>
            <Basket :buttonvisiblity="false" :linkToHome="orderAccepted"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Basket from "./Product/Basket.vue";
@Component({
    components:{
        Basket,
    }
})
export default class Cart extends Vue {
    name = "";
    phone = "";
    address = "";
    orderAccepted = false;

    submitOrder() {
        if (this.name && this.phone && this.address) {
            this.$store.dispatch("cart/clearCart");
            this.orderAccepted = true;
            this.name = "";
            this.phone = "";
            this.address = "";
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/cart.sass'
</style>