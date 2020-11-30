<template>
  <div>
    <div>
      <q-btn flat round dense @click="$router.push(`/detail/${item.id}`)"><img :src="item.img" class="productImage"> </q-btn>
      <!-- <q-btn flat icon="mdi-heart-outline" color="primary" size="xl" style="position: relative; left: 90px; top: -65px; z-index: 2;"/> -->
    </div>
    <div>
      <!-- style="position: relative; z-index: 3; top: -50px" -->
      <div class="row q-pt-sm">
        <div class="col-xs-8 col-sm-10 col-md-10 col-lg-9">
          <div style="width: 200px">{{ item.name }}</div>
          <div>
            <span v-if="item.salePrice > 0" style="color: #a6a6a6">{{ item.salePrice }}원 </span>
            <span v-else></span>
            <span class="text-bold text-h4">{{ item.price }}원</span>
          </div>
          <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 ({{ item.review }})</div>
        </div>
        <q-space/>
        <div class="col-xs-4 col-sm-2 col-md-2 col-lg-3">
          <q-btn v-if="isHeart" flat icon="mdi-heart" style="color: #ed6665" size="xl" @click="$store.commit('inHeart', item.id)" />
          <q-btn v-else flat icon="mdi-heart-outline" style="color: #ed6665" size="xl" @click="$store.commit('inHeart', item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.row
  .productImage
    width: 300px
    height: 200px

</style>

<script>
export default {
  name: 'SectionProduct',
  props: ['item'],
  data () {
    return {

    }
  },
  // methods: {
  //   in (payload) {
  //     this.$store.commit('inHeart', payload)
  //   }
  // },
  computed: {
    isHeart () {
      return this.$store.state.heart.includes(this.item.id)
    }
  }
}
</script>
