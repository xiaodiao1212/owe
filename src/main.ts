import Vue from 'vue';

import ElementUI from 'element-ui';
import 'normalize.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import Swiper from "swiper";
import './utils/rem.ts';
// import 'lib-flexible';

// import animate from 'animate.css';

import App from './App.vue';
import router from './router';
import store from './store';

// import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.less';

Vue.config.productionTip = false;

Vue.use(ElementUI);

// Vue.use(animate);
// Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
