<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="row detailCenter">
        <div style="height=550px; width: 500px"><img class="detailImg" :src="item.img" width="100%"></div>
        <div class="d-content text-left">
          <h2 class="detailName">{{ item.name }}</h2>
          <div class="q-py-sm text-secondary detailName">{{ item.exp }}</div>
          <div class="row q-py-xl" style="width: 100%">
            <div v-if="item.salePrice !== 0" class="text-h4 text-secondary q-pt-md q-pr-xs">{{ item.salePrice }}원</div>
            <div class="text-h2 q-pt-xs">{{ item.price }}원</div>
            <q-space/>
            <div v-if="item.salePrice !== 0" class="text-h3 text-primary q-pt-sm">{{ Math.round((item.salePrice - item.price)/item.salePrice * 100 ) }}%</div>
          </div>
          <div class="row">
            <div class="text-bold" style="width: 100%" >상품을 선택하세요</div>
            <div style="width: 100%">
              <q-select v-model="product" :options="item.opts" label="상품 선택" @input="onAdd"/>
            </div>
          </div>
          <div class="product-box" style="width: 100%" v-for="product in products" :key="product.id">
            <div class="row q-py-sm">
              <div class="q-pt-sm q-pl-sm">{{ product.name }}</div><q-space/>
              <div><q-btn flat label="X" @click="onDelete(product)"/></div>
            </div>
            <div class="row q-pb-xs">
              <div class="q-pl-sm">
                <q-btn size="xs" label="-" v-if="product.count > 0" @click="product.count--" />
                <q-btn size="xs" label="-" v-else />
                <input style="width: 30px" type="text" v-model="product.count">
                <q-btn size="xs" label="+" @click="product.count++" />
              </div><q-space/>
              <div class="q-pr-sm">{{ 0 + item.price*product.count }} 원</div>
            </div>
          </div>
          <div class="row q-pt-xl text-right" style="width: 100%"><q-space/>
            <div class="text-h6 q-pt-md">총 상품금액</div>
            <div class="text-h3 q-pt-xs q-pl-sm">{{ total }} 원</div>
          </div>
          <div class="row q-pt-xl" style="width: 100%"><q-space/>
            <q-btn v-if="isHeart" flat icon="mdi-heart" color="primary" size="xl" @click="$store.commit('inHeart', item.id)" />
            <q-btn v-else flat icon="mdi-heart-outline" color="primary" size="xl" @click="$store.commit('inHeart', item.id)" />
            <q-btn class="text-primary" flat icon="mdi-cart-outline" size="xl" @click="confirm = true"/>
            <q-btn class="productbuy" push color="primary" label="구매하기" style="font-size: 20px" @click="buy = true"/>
          </div>

          <q-dialog v-model="confirm" persistent>
            <q-card style="width: 400px">
              <q-card-section class="row items-center">
                <q-avatar class="q-ml-sm" icon="mdi-account-question-outline" color="primary" text-color="white" />
                <span class="q-ml-md">장바구니에 담으시겠습니까 ? </span>
              </q-card-section>
              <q-card-actions align="right" class="q-pr-md">
                <q-btn flat label="아니요" color="primary" v-close-popup />
                <!-- <q-btn flat label="네, 담을래요!" color="primary" @click="$store.commit('inCart', item)" v-close-popup /> -->
                <q-btn flat label="네, 담을래요!" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="buy" persistent>
            <q-card style="width: 400px">
              <q-card-section class="row items-center">
                <q-avatar class="q-ml-sm" icon="mdi-currency-usd" color="primary" text-color="white" />
                <span class="q-ml-md">구매하시겠습니까 ? </span>
              </q-card-section>
              <q-card-actions align="right" class="q-pr-md">
                <q-btn flat label="아니요" color="primary" v-close-popup />
                <q-btn flat label="네, 살래요!" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>
      </div>
      <!-- <div>
        <div class="text-h6 text-secondary q-pt-xl">같이 본 상품</div>
        <div class="row">
          <div><q-btn class="q-pt-xl" flat color="secondary" icon="mdi-chevron-left" size="xl"/></div>
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

          <div class="q-pt-md">
            <img src="image/1.png" style="width: 160px; height: 100px;">
            <div>국산 하이큐 네임펜</div>
            <div class="text-secondary">12000원</div>
          </div>
          <div><q-btn class="q-pt-xl" flat color="secondary" icon="mdi-chevron-right" size="xl"/></div>
        </div>
      </div> -->
      <DetailBottom/>
    </div>
  </div>
</template>

<style lang="sass">
.product-box
  outline: 1px solid #a6a6a6

.d-content
  padding-left: 50px
  @media (max-width: $breakpoint-md)
    padding-left: 0px
    width: 100%

.detailImg
  @media (max-width: $breakpoint-md)
    width: 100%
    height: 100%

.detailName
  @media (max-width: $breakpoint-md)
    padding-top: 20px
  @media (max-width: $breakpoint-sm)
    width: 100%
    padding-left: 0px

.sale
  padding-left: 85px
  @media (max-width: $breakpoint-md)
    padding-left: 200px
  @media (max-width: $breakpoint-sm)
    padding-left: 120px
  @media (max-width: $breakpoint-xs)
    padding-left: 0px

//////////////////////////////////////
.productbuy
  width: 300px
  @media (max-width: $breakpoint-xs)
    width: 120px
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
      products: [],
      item: this.$store.state.items.find(item => item.id === this.$route.params.id),
      confirm: false,
      buy: false
    }
  },
  computed: {
    total () {
      let sum = 0
      this.products.forEach(p => {
        console.log(p)
        sum += p.price * p.count
      })
      return sum
    },
    isHeart () {
      return this.$store.state.heart.includes(this.item.id)
    }
  },
  methods: {
    onAdd () {
      this.products.push({ name: this.product, count: 1, price: this.item.price })
      // this.products.push({ ...this.product, count: 1 })
    },
    onDelete (product) {
      this.products = this.products.filter(x => x.name !== product.name)
    }
  }
}
</script>
