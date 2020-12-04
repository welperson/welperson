<template>
  <div>
    <div class="q-py-lg text-center">
      <div>
        <img :src="item.img" class="description__img">
      </div>
      <div class="text-h1 q-py-xl">{{ item.name }}</div>
      <div class="text-h4 q-py-xl">{{ item.exp }}</div>
    </div>
  </div>
</template>

<style lang="sass">
.description__img
  width: 100%
  height: auto
</style>

<script>
export default {
  name: 'Description',
  data () {
    return {
      item: this.$store.state.products.items.find(item => item.id === this.$route.params.id)
    }
  }
}
</script>
