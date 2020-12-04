<template>
  <div class="content">
    <div class="q-pa-lg">
      <h1 class="text-primary q-py-md">베스트</h1>
      <Products :items="bestItems"/>
    </div>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'BestProduct',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      bestItems: 'bestItems'
    })
  }
}
</script>
