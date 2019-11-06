<template>
  <div>
    product1: {{ getProductById(2).name }}
    <ul>
      <li v-for="(product, i) in depletedProducts" :key="i">
          name: {{ product.name }}
      </li>
    </ul>
    <p>{{ count }}</p>
    <button v-on:click="increment">increment</button>
    <button v-on:click="incrementBy({ amount: 2 })">increment + 2</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState([
      'count', 'loggedInUser'
    ]),
    ...mapGetters([
      'depletedProducts',
      'getProductById'
    ])
  },
  methods: {
    updateCount () {
      this.$store.commit('increment', { amount: 25 })
    },
    async increment () {
      console.log(await this.$store.dispatch('increment'))
    }
    // ...mapMutations([
    //   'increment',
    //   'incrementBy'
    // ])
  }
}
</script>
