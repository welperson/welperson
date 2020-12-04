<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <img :src="item.img" class="detail__img">
    </div>
    <div class="text-left col-xs-12 col-sm-12 col-md-12 col-lg-6 q-pl-sm q-pt-lg">
      <h2>{{ item.name }}</h2>
      <div class="q-py-sm text-secondary">{{ item.exp }}</div>
      <div class="row q-py-xl detail__price">
        <h4 isSale class="text-secondary q-pt-md q-pr-xs">{{ item.salePrice }}원</h4>
        <h2 class="q-pt-xs">{{ item.price }}원</h2>
        <q-space/>
        <h3 v-if="item.salePrice !== 0" class="text-primary q-pt-sm">{{ Math.round((item.salePrice - item.price)/item.salePrice * 100 ) }}%</h3>
      </div>
      <div class="row">
        <div class="text-bold">상품을 선택하세요</div>
        <q-select v-model="stuff" :options="item.opts" label="상품 선택" @input="onAdd" class="detail__select"/>
      </div>
      <div class="product-box" v-for="stuff in stuffs" :key="stuff.id">
        <div class="row q-py-sm">
          <h6 class="q-pt-sm q-pl-sm">{{ stuff.name }}</h6><q-space/>
          <q-btn flat label="X" @click="onDelete(stuff)"/>
        </div>
        <div class="row q-pb-xs items-center">
          <div class="q-pl-sm">수량</div>
          <q-input class="q-pl-md product-box__cnt" type="number" v-model="stuff.count" min="0" />
          <q-space/>
          <div class="q-pr-sm">{{ 0 + item.price*stuff.count }} 원</div>
        </div>
      </div>
      <div class="row q-pt-xl text-right"><q-space/>
        <h6 class="q-pt-md">총 상품금액</h6>
        <h3 class="q-pt-xs q-pl-sm">{{ total }} 원</h3>
      </div>
      <div class="row q-pt-xl"><q-space/>
        <q-btn class="col-xs-2 col-sm-1 col-md-1 col-lg-2" flat :icon= "isHeart ? 'mdi-heart' : 'mdi-heart-outline'" color="primary" size="xl" @click="onHeart( item.id )" />
        <q-btn class="col-xs-2 col-sm-1 col-md-1 col-lg-2 text-primary" flat icon="mdi-cart-outline" size="xl" @click="cartconfirm = true"/>
        <q-btn class="col-xs-6 col-sm-4 col-md-4 col-lg-5 buybutton" push color="primary" label="구매하기" @click="buyconfirm = true"/>
      </div>
    </div>

    <q-dialog v-model="cartconfirm" persistent>
        <q-card style="width: 400px">
          <q-card-section class="row items-center">
            <q-avatar class="q-ml-sm" icon="mdi-account-question-outline" color="primary" text-color="white" />
            <span class="q-ml-md">장바구니에 담으시겠습니까 ? </span>
          </q-card-section>
          <q-card-actions align="right" class="q-pr-md">
            <q-btn flat label="아니요" color="primary" v-close-popup />
            <q-btn flat label="네, 담을래요!" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="buyconfirm" persistent>
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
</template>

<style lang="sass">
.product-box
  outline: 1px solid #a6a6a6
  width: 100%

.detail__img, .detail__price, .detail__select
  width: 100%

.buybutton
  font-size: 20px
.product-box__cnt
  width: 70px

</style>

<script>
import Dialog from 'components/Dialog'
import { mapMutations } from 'vuex'

export default {
  name: 'DetailInfo',
  components: Dialog,
  data () {
    return {
      stuff: null,
      stuffs: [],
      item: this.$store.state.products.items.find(item => item.id === this.$route.params.id),
      cartconfirm: false,
      buyconfirm: false
      // dialogs: [
      //   { name: 'cart-confirm', icon: 'mdi-account-question-outline', text: '장바구니에 담으시겠습니까 ? ', no: '아니요', yes: '네, 담을래요!', bool: false },
      //   { name: 'buy-confirm', icon: 'mdi-currency-usd', text: '구매하시겠습니까 ? ', no: '아니요', yes: '네, 살래요!', bool: false }
      // ]
    }
  },
  computed: {
    total () {
      let sum = 0
      this.stuffs.forEach(p => {
        console.log(p)
        sum += p.price * p.count
      })
      return sum
    },
    isHeart () {
      return this.$store.state.hearts.heart.includes(this.item.id)
    },
    // isPercent () {
    //   return Math.round((item.salePrice - item.price) / item.salePrice * 100)
    // },
    isSale () {
      return this.item.salePrice !== 0
    }
  },
  methods: {
    ...mapMutations('hearts', {
      onHeart: 'inHeart'
    }),
    onAdd () {
      this.stuffs.push({ name: this.stuff, count: 1, price: this.item.price })
      // this.stuffs.push({ ...this.stuff, count: 1 })
    },
    onDelete (stuff) {
      this.stuffs = this.stuffs.filter(x => x.name !== stuff.name)
    }
  }
}
</script>
