<template>
  <div>
    product1: {{ getProductById(2).name }}
    <ul>
      <li v-for="(product, i) in depletedProducts" :key="i">
          name: {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'depletedProducts',
      'getProductById'
    ])
  }
}
</script>
