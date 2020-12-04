<template>
  <div class="content">
    <div class="q-pa-lg">
      <h1 class="text-primary q-py-md">장바구니</h1>
      <div class="row q-px-lg q-pt-xl">
        <q-checkbox size="sm" label="전체선택" v-model="selectAll"/>
        <q-btn class="btn" flat label="선택삭제" @click="onSelectRemove"/>
      </div>
      <hr>
      <div v-for="cartItem in cartItems" :key="cartItem.id">
        <div class="row q-px-lg q-py-sm items-center">
          <q-checkbox size="sm" :val="cartItem.id" v-model="cartCheck"/>
          <div class="col-xs-10 col-sm-10 col-md-2 col-lg-2">
            <img :src="cartItem.img" class="cart__img">
          </div>
          <div class="col-xs-12 col-sm-6 col-md-5 col-lg-6 text-secondary q-pl-lg cart__text">
            <h5>{{ cartItem.name }}</h5>
            <div>{{ cartItem.exp }}</div>
            <div class="q-pt-sm"> {{ cartItem.opt }}</div>
          </div>
          <q-input class="q-pl-md cart__count" type="number" v-model="cartItem.count" min="0" />
          <div class="col-xs-9 col-sm-4 col-md-3 col-lg-2 q-pl-lg">
            <div class="row">
              <div class="q-pt-sm cart__price">{{ 0 + cartItem.price*cartItem.count }} 원</div>
              <q-btn flat label="X" @click="onRemove(cartItem)"/>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <div class="row q-px-lg">
        <q-checkbox size="sm" label="전체선택" v-model="selectAll"/>
        <q-btn class="btn" flat label="선택삭제" @click="onSelectRemove"/>
      </div>

      <div class="q-py-lg">
        <div class="row"><q-space/>
          <h6 class="q-pt-lg">총 상품금액</h6>
          <h2 class="q-pt-sm q-px-sm">{{ total }} 원</h2>
        </div>
        <div class="row q-py-lg"><q-space/>
          <q-btn push color="primary" label="구매하기" class="cart__btn" @click="buy = true"/>
        </div>
      </div>
    </div>

    <q-dialog v-model="buy" persistent>
      <q-card style="width: 400px">
        <q-card-section class="row items-center">
          <q-avatar class="q-ml-sm" icon="mdi-currency-usd-circle-outline" color="primary" text-color="white" />
          <span class="q-ml-md">선택한 상품을 구매하시겠습니까 ? </span>
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
.cart__img, .cart__text
  width: 100%
  height: auto

.cart__count
  width: 70px
.cart__price
  width: 100px
.cart__btn
  width: 200px
  font-size: 20px
</style>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cartCheck: [],
      cartItems: this.$store.state.carts.items.map(c => {
        const item = this.$store.state.products.items.find(item => item.id === c.id)
        return { ...item, ...c }
      }),
      buy: false,
      product: null
    }
  },
  computed: {
    selectAll: {
      get: function () {
        return this.cartItems ? this.cartCheck.length === this.cartItems.length : false
      },
      set: function (value) {
        var cartCheck = []
        if (value) {
          this.cartItems.forEach(function (cartItem) {
            cartCheck.push(cartItem.id)
          })
        }
        this.cartCheck = cartCheck
      }
    },
    total () {
      let sum = 0
      this.cartItems.forEach(c => {
        console.log(c)
        sum += c.price * c.count
      })
      return sum
    }
  },
  methods: {
    onRemove (cartItem) {
      this.cartItems = this.cartItems.filter(x => x.id !== cartItem.id)
    },
    onSelectRemove () {
      if (this.cartCheck !== null) {
        for (var i = 0; i < this.cartCheck.length; i++) {
          this.cartItems = this.cartItems.filter(x => x.id !== this.cartCheck[i])
        }
      }
    }
  }
}
</script>
