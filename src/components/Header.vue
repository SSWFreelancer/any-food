<template>
  <div class="header">
    <div class="header__container">
      <router-link to="/" :class="isHomePage ? 'header__back hidden' : 'header__back'">
        <img src="@/assets/arrow.svg" alt="">
        <span>restaurants</span>
      </router-link>
      <router-link to="/" class="header__logo">
        <img src="@/assets/logo.svg" alt="">
      </router-link>
      <div class="header__currencies">
        <p
          v-for="currency in currencies"
          :key="currency"
          :class="{ active: currency === newSelectedCurrency }"
          @click="selectCurrency(currency)"
        >
          {{ currency }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  currencies = ["USD", "EUR", "RUB"];
  newSelectedCurrency: string = this.$store.state.currency.selectedCurrency;

  selectCurrency(currency: string) {
    this.$store.dispatch("currency/updateCurrency", currency);
    this.newSelectedCurrency = currency;
  }

  get isHomePage(): boolean {
    return this.$route.path === "/";
  }

}
</script>

<style lang="sass" scoped>
@import '@/style/header.sass'
</style>