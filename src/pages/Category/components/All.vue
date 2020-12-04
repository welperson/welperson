<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">전체보기</div>
    <Products :items="items"/>
  </div>
</template>

<script>
import Products from 'components/Products'

export default {
  name: 'All',
  components: {
    Products
  },
  data () {
    return {
      items: this.$store.state.products.items
    }
  }
}
</script>
