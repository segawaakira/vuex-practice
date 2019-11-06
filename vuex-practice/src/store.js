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
    count: 0,
    loggedInUser: {
      name: 'John',
      role: 'Admin'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit('increment') : false,
    incrementAsync: ({ commit }) => {
      setTimeout(() => { commit('increment') }, 1000)
    }
  },
  getters: {
    parity: state => state.count % 2 === 0 ? 'even' : 'odd'
  }
})
