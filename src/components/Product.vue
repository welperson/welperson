<template>
  <div>
    <img :src="item.img" style="max-width: 300px">
    <div>
      <div>{{ item.name }}</div>
      <div>
        <span v-if="item.salePrice > 0" style="color: #a6a6a6">{{ item.salePrice }}원</span>
        <span v-else></span>
        <span class="text-bold text-h4">{{ item.price }}원</span>
      </div>
      <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 ({{ item.review }})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionProduct',
  props: ['item'],
  // props: {
  //   name: String,
  //   age: Number,
  //   message: String
  // },
  data () {
    return {

    }
  }
}
</script>
