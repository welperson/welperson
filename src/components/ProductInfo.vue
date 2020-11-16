<template>
  <div class="row">
        <div><img src="image/2.png" height="550px" width="550px"></div>
        <div class="q-pl-xl">
          <div class="text-h2">모던오피스 고급 스틸 연필꽂이</div>
          <div class="q-py-sm text-secondary">깔끔한 정리와 모던한 디자인의 연필꽂이</div>
          <div class="row q-py-xl">
            <div class="text-h4 text-secondary q-pt-md">25000원</div>
            <div class="text-h2 q-pt-xs q-pl-md">22500원</div>
            <q-space/>
            <div class="text-h3 text-primary q-pt-sm">10%</div>
          </div>
          <div class="row">
            <div class="col-3 q-pt-md">상품을 선택하세요</div>
            <div class="col-9"><q-select v-model="product" :options="options" label="상품 선택"/></div>
          </div>
          <div class="product-box" v-if="product !== null">
            <div class="row q-py-sm">
              <div class="q-pt-sm q-pl-sm">{{ product }}</div><q-space/>
              <div><q-btn flat label="X" @click="onClick"/></div>
            </div>
            <div class="row q-pb-xs">
              <div class="q-pl-sm">
                <q-btn size="xs" label="-" @click="count--" />
                <input style="width: 30px" type="text" v-model="count">
                <q-btn size="xs" label="+" @click="count++" />
              </div><q-space/>
              <div class="q-pr-sm">22500원</div>
            </div>
          </div>
          <div class="row"><q-space/>
            <div class="text-h6 q-pt-md">총 상품금액</div>
            <div class="text-h3 q-pt-xs q-pl-sm">0원</div>
          </div>
          <div class="row q-pt-xl"><q-space/>
            <q-btn flat icon="mdi-heart-outline" class="text-primary" size="xl"/>
            <q-btn flat icon="mdi-cart-outline" class="text-primary" size="xl"/>
            <q-btn push color="primary" label="구매하기" style="width: 300px; font-size: 20px"/>
          </div>
        </div>
      </div>
</template>

<style lang="sass">
.product-box
  outline: 1px solid #a6a6a6

</style>

<script>
// import ProductOption from 'components/ProductOption'

export default {
  name: 'Detail',
  // components: ProductOption,
  props: ['product', 'options', 'count'],
  data () {
    return {
      // product: null,
      // options: [
      //   '화이트', '실버', '블랙'
      // ],
      // count: 0
      // items: this.$store.state.items
    }
  },
  methods: {
    onClick () {
      this.product = null
    }
  }
}
</script>
