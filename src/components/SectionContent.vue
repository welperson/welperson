<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">
        {{ title }}
      </div>
      <div>
        <span class="text-h4 text-primary">IT 직군 </span>
        <span class="text-h4" style="color: #a6a6a6">이라면 필요할 걸 ?</span>
      </div>
      <div class="row items-start">
        <div class="col-4 q-pa-xl" v-for="item in teamItem" :key="item.id">
          <Product :item="item"/>
        </div>
      </div>
    </div>

    <div class="q-pa-lg">
      <div>
        <span class="text-h4" style="color: #a6a6a6">어서 와~ </span>
        <span class="text-h4 text-primary">맞춤 상품 </span>
        <span class="text-h4" style="color: #a6a6a6">은 처음이지 ?</span>
      </div>
      <div class="row items-start">
        <div class="col-4 q-pa-xl" v-for="item in fitItem" :key="item.id">
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
  // props: ['title'],
  props: {
    title: String
  },
  data () {
    return {
      teamItem: this.$store.state.items.filter(item => item.team),
      fitItem: this.$store.state.items.filter(item => item.fit)
    }
  }
  // computed: {
  //   items () {
  //     return this.$store.state.items
  //   }
  // }
}

</script>
