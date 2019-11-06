<template>
  <div>
    <p>Welcome, {{ loggedInUser.name }}.</p>
    <p>Count: {{ count }} !Count is {{ parity }}.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'count', 'loggedInUser'
    ]),
    parity () {
      return this.count % 2 === 0 ? 'even' : 'odd'
    }
  }
}
</script>
