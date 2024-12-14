import { Module } from "vuex";
import { RootState, CurrencyState } from "./index";

const currency: Module<CurrencyState, RootState> = {
    namespaced: true,
    state: {
        selectedCurrency: "USD",
    },
    mutations: {
        setCurrency(state, currency: string) {
            state.selectedCurrency = currency;
        },
    },
    actions: {
        updateCurrency({ commit }, currency: string) {
            commit("setCurrency", currency);
        },
    },
};

export default currency;
