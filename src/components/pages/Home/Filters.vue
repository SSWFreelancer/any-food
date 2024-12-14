<template>
    <div class="filters">
        <div class="filters__container">
            <div class="filters__title">
                Cuisines:
            </div>
            <div class="filters__menu">
                <div
                    class="filters__item"
                    :class="{ active: selectedItem === 'all' }"
                    @click="selectFilter('all')"
                >
                    all
                </div>
                <div
                    class="filters__item"
                    v-for="item in items"
                    :key="item"
                    :class="{ active: selectedItem === item }"
                    @click="selectFilter(item)"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Filters extends Vue {
    @Prop() items: Array<string>
    selectedItem: string = "all";
    selectFilter(item: string): void {
        this.selectedItem = item;
        this.$emit("filterSelected", item);
    }
}
</script>

<style lang="sass" scoped>
@import '@/style/pages/home/filters.sass'
</style>