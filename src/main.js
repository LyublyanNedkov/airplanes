import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import './styles.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.http.options.root = 'https://airplanes-876f6-default-rtdb.europe-west1.firebasedatabase.app/data.json';

const router = new VueRouter({
    mode: 'history',   
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return { selector: to.hash };
      }
      return {x: 0, y: 0};
    }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export const bus = new Vue();