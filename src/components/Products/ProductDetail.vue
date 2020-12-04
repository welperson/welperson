<template>
  <div class="q-mt-md">
    <div class="container">
      <router-link :to="`/detail/${item.id}`">
        <img class="proImg" :src="item.img">
      </router-link>
    </div>
    <div>
      <div class="row q-pt-sm">
        <div class="container__info">
          <div>{{ item.name }}</div>
          <div>
            <span v-if="item.salePrice > 0" class="text-dark">{{ item.salePrice }}원 </span>
            <span v-else></span>
            <span class="text-bold text-h4">{{ item.price }}원</span>
          </div>
          <div class="text-h6 q-pt-xs text-dark">리뷰 ({{ item.review }})</div>
        </div>
        <q-space/>
        <div>
          <q-btn class="container__heart" flat :icon="isHeart ? 'mdi-heart' : 'mdi-heart-outline'" size="xl" @click="onHeart( item.id )" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.container
  position: relative
  height: 220px
  overflow: hidden

.proImg
  position: absolute
  width: 100%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.container__info
  width: 67%

.container__heart
  color: #ed6665

</style>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductDetail',
  props: ['item'],
  data () {
    return {

    }
  },
  computed: {
    isHeart () {
      return this.$store.state.hearts.heart.includes(this.item.id)
    }
  },
  methods: {
    ...mapMutations('hearts', {
      onHeart: 'inHeart'
    })
  }
}
</script>
