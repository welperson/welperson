<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="row">
        <div class="col-0.5 q-pt-xs"><q-icon class="ic" name="mdi-heart" style="color: #ed6665" size="xl"/></div>
        <div class="text-h1 text-secondary">내가 찜한 리스트</div>
      </div>
      <div class="row items-start q-col-gutter-md">
        <div class="column col-xs-12 col-sm-6 col-md-4 q-pa-xl" v-for="item in heartItems" :key="item.id">
          <Product :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from 'components/Product'

export default {
  name: 'Favorite',
  components: {
    Product
  },
  data () {
    return {
      heartItems: this.$store.state.items.filter(item => this.$store.state.heart.includes(item.id))
      // heartItems: this.$sotre.state.hearts.map(h => {
      //   const item = this.$store.state.items.find(item => item.id === h.id)
      //   return { ...item, ...h }
      // })
    }
  }
}
</script>
