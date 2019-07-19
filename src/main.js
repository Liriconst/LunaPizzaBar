import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MenuElem from "./components/MenuElem";
import MenuSection from "./components/MenuSection";
import PageImg from "./components/PageImg";

Vue.component("menu-elem", MenuElem);
Vue.component("menu-section", MenuSection);
Vue.component("page-img", PageImg);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
