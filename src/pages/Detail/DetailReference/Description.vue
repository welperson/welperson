<template>
  <div>
    <div class="q-py-lg" style="text-align: center">
      <div>
        <img :src="item.img" style="width: 100%; height: auto">
      </div>
      <div class="text-h1 q-py-xl" style="text-align: center">{{ item.name }}</div>
      <div class="text-h4 q-py-xl">{{ item.exp }}</div>
    </div>
  </div>
</template>

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
