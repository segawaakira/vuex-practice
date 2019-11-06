<template>
  <div>
    <p>Welcome, {{ loggedInUser.name }}.</p>
    <p>Count: {{ count }} !</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'count', 'loggedInUser'
  ])
}
</script>
