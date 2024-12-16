import { Module } from "vuex";
import { RootState } from "./index";

export interface AuthState {
    name: string;
}

const auth: Module<AuthState, RootState> = {
    namespaced: true,
    state: {
        name: "",
    },
    mutations: {
        setName(state, name: string) {
            state.name = name;
            sessionStorage.setItem("userName", name);
        },
    },
    actions: {
        updateName({ commit }, name: string) {
            commit("setName", name);
        },
    },
};

export default auth;
