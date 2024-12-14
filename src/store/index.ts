import Vue from 'vue'
import Vuex from 'vuex'
import currency from "./modules/currencies";
import { cart  } from "./modules/cart";
import { RootState } from "./modules/index";

Vue.use(Vuex)
const state: RootState = {
  currency: {
    selectedCurrency: "USD",
  },
};

export default new Vuex.Store({
  state,
  modules: {
    currency,
    cart
  },
})
