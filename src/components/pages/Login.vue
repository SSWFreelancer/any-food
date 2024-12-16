<template>
    <div class="login">
        <div class="login__container">
            <div class="login__title">
                Login
            </div>
            <form class="login__form" @submit.prevent="login">
                <div class="login__input">
                    <span>
                        Name
                    </span>
                    <input v-model="name"  type="text" required>
                </div>
                <div class="login__input">
                    <span>
                        Password
                    </span>
                    <input v-model="password" type="password" required>
                </div>
                <button>
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
    name: string = '';
    password: string = '';
    setName!: (name: string) => void;

    login() {
        if (this.name && this.password) {
            this.$store.commit("auth/setName", this.name);
            this.$router.push("/");
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/login.sass'
</style>