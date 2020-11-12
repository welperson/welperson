<template>
  <div>
    <div class="row justify-center">
      <q-btn flat @click="$router.push('/detail')"><img :src="item.img" class="productImage inline-block" style="position: relative; z-index: 1;"> </q-btn>
      <q-btn flat icon="mdi-heart-outline" color="primary" size="xl" style="position: relative; left: 90px; top: -65px; z-index: 2;"/>
    </div>
    <div style="position: relative; z-index: 3; top: -50px">
      <div>{{ item.name }}</div>
      <div>
        <span v-if="item.salePrice > 0" style="color: #a6a6a6">{{ item.salePrice }}원 </span>
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
  data () {
    return {

    }
  }
}
</script>
