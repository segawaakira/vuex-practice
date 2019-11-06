<template>
  <div>
    <ul>
      <li v-for="(product, i) in depletedProducts" :key="i">
          name: {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    depletedProducts () {
      return this.$store.getters.depletedProducts
    }
  }
}
</script>
