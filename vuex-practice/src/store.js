import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    count: 5,
    loggedInUser: {
      name: 'John',
      role: 'Admin'
    }
  },
  mutations: {
    // put sychronous functions for changing state e.g. add, edit, delete
  },
  actions: {
    // put asynchronous functions that can call one or more mutation functions
  }
})