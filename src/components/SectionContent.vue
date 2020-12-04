<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="q-pb-xl">
        <span class="text-h3 text-primary">IT 직군 </span>
        <span class="text-h4 text-dark">이라면 필요할 걸 ?</span>
      </div>
      <Products :items="teamItems"/>
    </div>

    <div class="q-pa-lg">
      <div class="q-pt-xl">
        <span class="text-h4 text-dark">어서 와~ </span>
        <span class="text-h3 text-primary">맞춤 상품 </span>
        <span class="text-h4 text-dark">은 처음이지 ?</span>
      </div>
      <Products :items="fitItems"/>
    </div>
  </div>
</template>

<script>
import Products from './Products'

export default {
  name: 'SectionContent',
  components: {
    Products
  },
  data () {
    return {
      teamItems: this.$store.state.products.items.filter(item => item.team),
      fitItems: this.$store.state.products.items.filter(item => item.fit)
    }
  }
}

</script>
