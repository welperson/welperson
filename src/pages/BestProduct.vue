<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">베스트</div>
      <div class="row items-start">
        <div class="col-4 q-pa-xl" v-for="item in bestItem" :key="item.id">
          <Product :item="item"/>
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
      bestItem: this.$store.state.items.filter(item => item.types.includes('best'))
    }
  }
}
</script>
