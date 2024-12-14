<template>
    <div class="banner">
        <div class="banner__bg">
            <slot name="bg"><img src="@/assets/header-img.webp" alt=""></slot>
        </div>
        <div class="banner__container">
            <div class="banner__title">
                <slot name="title">Order Food</slot>
            </div>
            <div class="banner__subtitle"><slot name="subtitle"></slot></div>  
            <slot name="ratings"></slot>          
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/style/banner.sass'
</style>