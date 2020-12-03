<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="q-pb-xl">
        <span class="text-h3 text-primary">IT 직군 </span>
        <span class="text-h4" style="color: #a6a6a6">이라면 필요할 걸 ?</span>
      </div>
      <div class="row items-start q-col-gutter-md">
        <div class="pro-detail column col-xs-12 col-sm-6 col-md-4" v-for="item in teamItem" :key="item.id">
          <Product :item="item" />
        </div>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="q-pt-xl">
        <span class="text-h4" style="color: #a6a6a6">어서 와~ </span>
        <span class="text-h3 text-primary">맞춤 상품 </span>
        <span class="text-h4" style="color: #a6a6a6">은 처음이지 ?</span>
      </div>
      <div class="row items-start q-col-gutter-md" >
        <div class="pro-detail column col-xs-12 col-sm-6 col-md-4" v-for="item in fitItem" :key="item.id">
          <Product :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'

export default {
  name: 'SectionContent',
  components: {
    Product
  },
  data () {
    return {
      teamItem: this.$store.state.products.items.filter(item => item.team),
      fitItem: this.$store.state.products.items.filter(item => item.fit)
    }
  }
}

</script>
