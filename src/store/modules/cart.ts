import { Module } from "vuex";

export interface CartItem {
    id: string;
    name: string;
    price: {
        USD: number;
        EUR: number;
        RUB: number;
    };
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export const cart: Module<CartState, any> = {
    namespaced: true,
    state: {
        items: JSON.parse(sessionStorage.getItem("cartItems") || "[]"), // Загружаем из sessionStorage
    },
    mutations: {
        addToCart(state, item: CartItem) {
            const existingItem = state.items.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
            sessionStorage.setItem("cartItems", JSON.stringify(state.items)); // Сохраняем в sessionStorage
        },
        updateQuantity(state, { id, quantity, price }: { id: string; quantity: number; price: CartItem["price"] }) {
            const item = state.items.find(cartItem => cartItem.id === id);
            if (item) {
                item.price.USD = price.USD;
                item.price.RUB = price.RUB;
                item.price.EUR = price.EUR;

                if (quantity >= 0) {
                    item.quantity = quantity;
                    if (quantity === 0) {
                        state.items = state.items.filter(cartItem => cartItem.id !== id);
                    }
                }
            }
            sessionStorage.setItem("cartItems", JSON.stringify(state.items)); // Сохраняем в sessionStorage
        },
        removeFromCart(state, id: string) {
            state.items = state.items.filter(cartItem => cartItem.id !== id);
            sessionStorage.setItem("cartItems", JSON.stringify(state.items)); // Сохраняем в sessionStorage
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
            sessionStorage.setItem("cartItems", JSON.stringify(state.items)); // Сохраняем в sessionStorage
        },
        clearCart(state) {
            state.items = [];
            sessionStorage.setItem("cartItems", JSON.stringify(state.items)); // Сохраняем в sessionStorage
        },
    },
    actions: {
        addToCart({ commit }, item: CartItem) {
            commit("addToCart", item);
        },
        updateQuantity({ commit }, payload: { id: string; quantity: number; price: CartItem["price"] }) {
            commit("updateQuantity", payload);
        },
        removeFromCart({ commit }, id: string) {
            commit("removeFromCart", id);
        },
        updatePrices({ commit }, newPrices: { id: string; price: CartItem["price"] }[]) {
            commit("updatePrices", newPrices);
        },
        clearCart({ commit }) {
            commit("clearCart");
        },
    },
};
