<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">신상품</div>
      <div class="row items-start q-col-gutter-md">
        <div class="column col-xs-12 col-sm-6 col-md-4 q-pa-xl" v-for="item in newItem" :key="item.id">
          <Product :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from 'components/Product'

export default {
  name: 'NewProduct',
  components: {
    Product
  },
  data () {
    return {
      newItem: this.$store.state.items.filter(item => item.types.includes('new'))
    }
  }
}
</script>
