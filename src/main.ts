import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';
import '@/style/index.sass';

Vue.config.productionTip = false;

const userName = sessionStorage.getItem("userName");
if (userName) {
  store.commit("auth/setName", userName);
}else{
  router.push("/login");
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
