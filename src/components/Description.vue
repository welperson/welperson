<template>
  <!-- 상품설명 -->
  <div>
    <div class="q-py-lg" style="text-align: center">
      <!-- <div class="text-h1">상품설명</div> -->
      <div><img :src="item.img" class="desImg"></div>
      <div class="text-h1 q-py-xl" style="text-align: center">{{ item.name }}</div>
      <div class="text-h4 q-py-xl">{{ item.exp }}</div>
    </div>
  </div>
</template>

<style lang="sass">
.desImg
  width: 890px
  height: 820px
  @media (max-width: $breakpoint-sm)
    width: 570px
    height: 500px
  @media (max-width: $breakpoint-xs)
    width: 350px
    height: 300px
</style>

<script>
export default {
  name: 'Description',
  data () {
    return {
      item: this.$store.state.items.find(item => item.id === this.$route.params.id)
    }
  }
}
</script>
