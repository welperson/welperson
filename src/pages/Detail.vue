<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="row detailCenter">
        <div><img class="detailImg" :src="item.img" height="550px" width="550px"></div>
        <div class="q-pl-xl info">
          <h2 class="detailName">{{ item.name }}</h2>
          <div class="q-py-sm text-secondary detailName">{{ item.exp }}</div>
          <div class="row q-py-xl">
            <div v-if="item.salePrice !== 0" class="text-h4 text-secondary q-pt-md q-pr-md">{{ item.salePrice }}원</div>
            <div class="text-h2 q-pt-xs">{{ item.price }}원</div>
            <q-space/>
            <div v-if="item.salePrice !== 0" class="text-h3 text-primary q-pt-sm">{{Math.round((item.salePrice - item.price)/item.salePrice * 100 ) }}%</div>
          </div>
          <div class="row">
            <div class="col-xs-9 col-sm-9 col-md-3 q-pt-md">상품을 선택하세요</div>
            <div class="col-9">
              <q-select v-model="product" :options="item.opts" label="상품 선택" @input="onSelect"/>
            </div>
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
              <div class="q-pr-sm">{{ 0 + item.price*count }} 원</div>
            </div>
          </div>
          <div class="row q-pt-xl"><q-space/>
            <div class="text-h6 q-pt-md">총 상품금액</div>
            <div class="text-h3 q-pt-xs q-pl-sm">{{ 0 + item.price*count }} 원</div>
          </div>
          <div class="row q-pt-xl"><q-space/>
            <q-btn flat icon="mdi-heart-outline" class="text-primary" size="xl"/>
            <q-btn flat icon="mdi-cart-outline" class="text-primary" size="xl"/>
            <q-btn push color="primary" label="구매하기" style="width: 300px; font-size: 20px"/>
          </div>
        </div>
      </div>
      <div>
        <div class="text-h6 text-secondary q-pt-xl">같이 본 상품</div>
        <div class="row">
          <div><q-btn class="q-pt-xl" flat color="secondary" icon="mdi-chevron-left" size="xl"/></div>
          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>
          <!-- 상품 복붙 -->
          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>

          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>

          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>

          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>

          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>
          <!-- 상품 복붙 -->
          <div><q-btn class="q-pt-xl" flat color="secondary" icon="mdi-chevron-right" size="xl"/></div>
        </div>

        <DetailBottom/>

      </div>
    </div>
  </div>
</template>

<style lang="sass">
.product-box
  outline: 1px solid #a6a6a6

.detailCenter
  @media (max-width: $breakpoint-md)
    text-align: center
    padding-left: 220px
  @media (max-width: $breakpoint-sm)
    text-align: center
    padding-left: 100px
  @media (max-width: $breakpoint-xs)
    text-align: center
    padding-left: 0px
  .info
    @media (max-width: $breakpoint-sm)
      text-align: center
      padding-left: 0px
    @media (max-width: $breakpoint-xs)
      text-align: center
      padding-left: 0px

.detailImg
  @media (max-width: $breakpoint-xs)
    width: 410px
    height: 300px

.detailName
  width: 450px
  @media (max-width: $breakpoint-md)
    width: 600px
    padding-left: 0px
  @media (max-width: $breakpoint-sm)
    width: 500px
    padding-left: 0px
  @media (max-width: $breakpoint-xs)
    width: 447px
    padding-left: 0px
</style>

<script>
import DetailBottom from 'components/DetailBottom.vue'

export default {
  name: 'Detail',
  components: {
    DetailBottom
  },
  data () {
    return {
      product: null,
      count: 1,
      item: this.$store.state.items.find(item => item.id === this.$route.params.id)
    }
  },
  methods: {
    onClick () {
      this.product = null
    },
    onSelect () {
      this.count = 1
    }
  }
}
</script>
