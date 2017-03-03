import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import storeConfig from 'store'
import router from 'config/routes'
import HttpPlugin from 'api/http'
import App from 'components/App'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(HttpPlugin)

const store = new Vuex.Store(storeConfig)
sync(store, router)
new Vue({
  ...App,
  router,
  store,
}).$mount('#app')
