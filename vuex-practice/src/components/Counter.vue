<template>
  <div>
    product1: {{ getProductById(2).name }}
    <ul>
      <li v-for="(product, i) in depletedProducts" :key="i">
          name: {{ product.name }}
      </li>
    </ul>
    <p>{{ count }}</p>
    <button v-on:click="updateCount">increment</button>
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
      this.$store.commit('increment', 25)
    }
  }
}
</script>
