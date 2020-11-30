<template>
  <div>
    <div>
      <q-btn flat round dense @click="$router.push(`/detail/${item.id}`)"><img class="proImg" :src="item.img" style="height: 200px; width: 300px"></q-btn>
    </div>
    <div>
      <div class="row q-pt-sm">
        <div>
          <div style="width: 225px">{{ item.name }}</div>
          <div>
            <span v-if="item.salePrice > 0" style="color: #a6a6a6">{{ item.salePrice }}원 </span>
            <span v-else></span>
            <span class="text-bold text-h4">{{ item.price }}원</span>
          </div>
          <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 ({{ item.review }})</div>
        </div>
        <q-space/>
        <div>
          <q-btn v-if="isHeart" flat icon="mdi-heart" style="color: #ed6665" size="xl" @click="$store.commit('inHeart', item.id)" />
          <q-btn v-else flat icon="mdi-heart-outline" style="color: #ed6665" size="xl" @click="$store.commit('inHeart', item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

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
