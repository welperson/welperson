<template>
  <div>
    <div class="row justify-center">
      <img :src="item.img" class="productImage inline-block">
    </div>
    <div>
      <div>{{ item.name }}</div>
      <div>
        <span v-if="item.salePrice > 0" style="color: #a6a6a6">{{ item.salePrice }}원</span>
        <span v-else></span>
        <span class="text-bold text-h4">{{ item.price }}원</span>
      </div>
      <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 ({{ item.review }})</div>
    </div>
  </div>
</template>

<style lang="sass">
.row
  .productImage
    width: 260px
    height: 200px
    // @media all and (max-width: 500px)
    //   width: 300px
    //   height: 250px

</style>

<script>
export default {
  name: 'SectionProduct',
  props: ['item'],
  // props: {
  //   name: String,
  //   age: Number,
  //   message: String
  // },
  data () {
    return {

    }
  }
}
</script>
