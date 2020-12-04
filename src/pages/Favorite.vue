<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="row">
        <q-icon class="q-py-md favorite__icon" name="mdi-heart" size="xl"/>
        <h1 class="text-secondary q-py-md">내가 찜한 리스트</h1>
      </div>
      <Products :items="heartItems"/>
    </div>
  </div>
</template>

<style lang="sass">
.favorite__icon
  color: #ed6665
</style>

<script>
import Products from 'components/Products'

export default {
  name: 'Favorite',
  components: {
    Products
  },
  data () {
    return {
      heartItems: this.$store.state.products.items.filter(item => this.$store.state.hearts.heart.includes(item.id))
      // heartItems: this.$sotre.state.hearts.map(h => {
      //   const item = this.$store.state.items.find(item => item.id === h.id)
      //   return { ...item, ...h }
      // })
    }
  }
}
</script>
