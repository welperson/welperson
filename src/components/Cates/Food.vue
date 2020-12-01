<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">푸드</div>
    <div class="row items-start q-col-gutter-md">
      <div class="proDetail column col-xs-12 col-sm-6 col-md-4" v-for="item in items" :key="item.id">
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
      // items: this.$store.state.items.filter(item => item.types.includes('food'))
      items: this.$store.getters.getCom('food')
    }
  }
}
</script>
