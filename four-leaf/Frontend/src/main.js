import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    cart: []
  },

  mutations: {

    addToCart: (state, item)=> {
      state.cart.push(item);

    },
  }
})