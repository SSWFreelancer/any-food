import { Module } from "vuex";

export interface CartItem {
    id: string;
    name: string;
    price: {
        USD: number;
        EUR: number;
        RUB: number
    };
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export const cart: Module<CartState, any> = {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        addToCart(state, item: CartItem) {
            const existingItem = state.items.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
        },
        updateQuantity(state, { id, quantity, price }: { id: string; quantity: number, price: CartItem["price"] }) {
            const item = state.items.find(cartItem => cartItem.id === id);
            item.price.USD = price.USD;
            item.price.RUB = price.RUB;
            item.price.EUR = price.EUR;

            if (item && quantity >= 0) {
                item.quantity = quantity;
                if (quantity === 0) {
                    state.items = state.items.filter(cartItem => cartItem.id !== id);
                }
            }
        },
        removeFromCart(state, id: string) {
            state.items = state.items.filter(cartItem => cartItem.id !== id);
        },
        updatePrices(state, newPrices: { id: string; price: CartItem["price"] }[]) {
            newPrices.forEach(({ id, price }) => {
                const item = state.items.find(cartItem => cartItem.id === id);
                if (item) {
                    item.price.USD = price.USD;
                    item.price.RUB = price.RUB;
                    item.price.EUR = price.EUR;
                }
            });
        },
        clearCart(state) {
            state.items = [];
        },
    },
    actions: {
        addToCart({ commit }, item: CartItem) {
            commit("addToCart", item);
        },
        updateQuantity({ commit }, payload: { id: string; quantity: number }) {
            commit("updateQuantity", payload);
        },
        removeFromCart({ commit }, id: string) {
            commit("removeFromCart", id);
        },
        clearCart({ commit }) {
            commit("clearCart");
        },
    },
};
