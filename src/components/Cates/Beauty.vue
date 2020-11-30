<template>
  <div>
    <div class="text-h1 text-primary q-pt-xl">뷰티</div>
    <div class="row items-start q-col-gutter-md">
      <div class="column col-xs-12 col-sm-6 col-md-4 q-pa-xl" v-for="item in items" :key="item.id">
        <Product :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from 'components/Product'

export default {
  name: 'All',
  components: {
    Product
  },
  data () {
    return {
      items: this.$store.getters.getCom('beauty')
    }
  }
}
</script>
