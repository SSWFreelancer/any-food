<template>
  <div>
    <Product />
  </div>
</template>

<script lang="ts">
import Product from '@/components/pages/Product/Product.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Product
  }
})

export default class ProductView extends Vue {}
</script>
