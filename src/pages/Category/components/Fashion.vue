<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">패션/잡화</div>
    <div class="row items-start q-col-gutter-md">
      <div class="pro-detail column col-xs-12 col-sm-6 col-md-4" v-for="item in items" :key="item.id">
        <Product :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from 'components/Product'
import { mapGetters } from 'vuex'

export default {
  name: 'All',
  components: {
    Product
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      items: 'fashionItems'
    })
  }
}
</script>
