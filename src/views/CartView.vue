<template>
  <div>
    <Cart />
  </div>
</template>

<script lang="ts">
import Cart from '@/components/pages/Cart.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Cart
  }
})

export default class CartView extends Vue {}
</script>
