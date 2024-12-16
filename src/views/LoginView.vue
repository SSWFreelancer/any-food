<template>
    <LoginComponent />
</template>

<script lang="ts">
import LoginComponent from '@/components/pages/Login.vue';
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    LoginComponent
  }
})

export default class LoginView extends Vue {}
</script>
