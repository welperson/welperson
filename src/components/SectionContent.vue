<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="q-pb-xl">
        <span class="text-h4 text-primary">IT 직군 </span>
        <span class="text-h4" style="color: #a6a6a6">이라면 필요할 걸 ?</span>
      </div>
      <div class="row items-start q-col-gutter-md">
        <div class="column col-xs-12 col-sm-6 col-md-4 q-pa-xl" v-for="item in teamItem" :key="item.id">
          <Product :item="item" />
        </div>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="q-pt-xl">
        <span class="text-h4" style="color: #a6a6a6">어서 와~ </span>
        <span class="text-h4 text-primary">맞춤 상품 </span>
        <span class="text-h4" style="color: #a6a6a6">은 처음이지 ?</span>
      </div>
      <div class="row items-start">
        <div class="column col-xs-12 col-sm-6 col-md-4 q-pa-xl" v-for="item in fitItem" :key="item.id">
          <Product :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
// @media all and (max-width: $breakpoint-xs)
//   .row
//     .column

// @media all and (max-width: 599px)
//   .col-4
//     float: left
//     width: 50%
//     &:nth-child(3n - 1)
//       margin-right: 50px
//       margin-left: 50px
//     &:nth-child(3n + 1)
//       clear: left

</style>

<script>
import Product from './Product'

export default {
  name: 'SectionContent',
  components: {
    Product
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
