import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'Hoge', stock: 0 },
      { id: 2, name: 'Fuga', stock: 3 },
      { id: 3, name: 'Piyo', stock: 0 }
    ],
    count: 4,
    loggedInUser: {
      name: 'John',
      role: 'Admin'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    // put asynchronous functions that can call one or more mutation functions
  },
  getters: {
    depletedProducts: state => {
      return state.products.filter(product => product.stock <= 0)
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id)
    }
  }
})
