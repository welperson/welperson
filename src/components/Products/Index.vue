<template>
  <div>
    <div class="row items-start q-col-gutter-md" >
      <div class="pro-detail column col-xs-12 col-sm-6 col-md-4" v-for="item in items" :key="item.id">
        <ProductDetail :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from './ProductDetail'

export default {
  name: 'Product',
  props: ['items'],
  components: {
    ProductDetail
  },
  data () {
    return {

    }
  }
}

</script>
