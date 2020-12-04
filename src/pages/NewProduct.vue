<template>
  <div class="content">
    <div class="q-pa-lg">
      <h1 class="text-primary q-py-md">신상품</h1>
      <Products :items="newItems"/>
    </div>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'NewProduct',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      newItems: 'newItems'
    })
  }
}
</script>
