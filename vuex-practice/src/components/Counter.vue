<template>
  <div>
    <p>Clicked {{ count }} times! Count is {{ parity }}.</p>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
    <button v-on:click="incrementIfOdd">Increment if Odd</button>
    <button v-on:click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Counter',
  computed: {
    ...mapState([
      'count', 'loggedInUser'
    ]),
    ...mapGetters(['parity'])
  },
  methods: {
    updateCount () {
      this.$store.commit('increment', { amount: 25 })
    },
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
    // async increment () {
    //   console.log(await this.$store.dispatch('increment'))
    // }
    // ...mapMutations([
    //   'increment',
    //   'incrementBy'
    // ])
  }
}
</script>
