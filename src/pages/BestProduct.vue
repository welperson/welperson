<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary q-py-md">베스트</div>
      <div class="row items-start q-col-gutter-md">
        <div class="proDetail column col-xs-12 col-sm-6 col-md-4 q-py-lg" v-for="item in bestItem" :key="item.id">
          <Product :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from 'components/Product'

export default {
  name: 'BestProduct',
  components: {
    Product
  },
  data () {
    return {
      bestItem: this.$store.getters.getCom('best')
    }
  }
}
</script>
