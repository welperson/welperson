<template>
  <div>
    <h4 class="q-pb-lg">상품 후기</h4>
    <div>
      <h5 class="q-py-sm text-center">내가 작성한 후기</h5>
      <div v-for="item in reviewItems" :key="item.id" class="row q-pt-md items-center">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img :src="item.img" style="width: 100%; height: auto;"></div>
        <div class="col-xs-9 col-sm-7 col-md-7 col-lg-8 q-px-lg">
          <h6>{{ item.name }}</h6>
          <div class="q-pt-sm">{{ item.text }}</div>
        </div>
        <h6 class="col-sm-1 col-md-1 col-lg-1 text-primary">{{ item.date }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyReview',
  data () {
    return {
      reviewItems: this.$store.state.reviews.items.map(r => {
        const item = this.$store.state.products.items.find(item => item.id === r.id)
        return { ...item, ...r }
      })
    }
  }
}
</script>
