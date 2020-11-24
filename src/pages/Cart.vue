<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">장바구니</div>
      <div class="row q-px-xl q-pt-xl">
        <div><q-checkbox size="sm" label="전체선택" v-model="selectAll"/></div>
        <div><q-btn class="btn" flat label="선택삭제" @click="onSelRem"/></div>
      </div>
      <hr>

      <!-- <div v-for="item in cartItems" :key="item.id">
        <div class="row q-px-xl q-py-sm">
          <div><q-checkbox size="sm" :val="item.id" v-model="cartCheck" style="padding-top: 30px"/></div>
          <div class="col-sm-5 col-md-2"><img class="cartImg" :src="item.img" style="width: 150px; height: 100px;"></div>
          <div class="col-xs-10 col-sm-7 col-md-5 text-secondary" style="padding-top: 30px">
            <div class="text-h5">{{ item.name }}</div>
            <div>{{ item.exp }}</div>
          </div>
          <div style="padding-top: 40px;">
            <q-btn size="xs" label="-" @click="cartItems.count--" />
            <input style="width: 30px" type="text" v-model="item.cartCnt">
            <q-btn size="xs" label="+" @click="cartItems.count++" />
          </div>
          <div class="row q-pl-xl">
            <div style="padding-top: 40px; width: 100px">{{ 0 + item.price*item.cartCnt }} 원</div>
            <div style="padding-top: 33px;"><q-btn flat label="X" @click="onRemove(item)"/></div>
          </div>
        </div>
        <hr>
      </div> -->

      <div v-for="cartItem in cartItems" :key="cartItem.id">
        <div class="row q-px-xl q-py-sm">
          <div><q-checkbox size="sm" :val="cartItem.id" v-model="cartCheck" style="padding-top: 30px"/></div>
          <div class="col-xs-10 col-sm-3 col-md-5 col-lg-2"><img class="cartImg" :src="cartItem.img" style="width: 150px; height: 100px;"></div>
          <div class="col-xs-10 col-sm-8 col-md-5 col-lg-5 namebox text-secondary q-pl-lg" style="padding-top: 30px;">
            <div class="text-h5">{{ cartItem.name }}</div>
            <div>{{ cartItem.exp }}</div>
          </div>
          <div class="col-sm-6 col-md-7 col-lg-2" style="padding-top: 40px;">
            <q-btn size="xs" label="-" v-if="cartItem.count > 0" @click="cartItem.count--" />
            <q-btn size="xs" label="-" v-else />
            <input style="width: 30px" type="text" v-model="cartItem.count">
            <q-btn size="xs" label="+" @click="cartItem.count++" />
          </div>
          <div class="row q-pl-xl">
            <div style="padding-top: 40px; width: 100px">{{ 0 + cartItem.price*cartItem.count }} 원</div>
            <div style="padding-top: 33px;"><q-btn flat label="X" @click="onRemove(cartItem)"/></div>
          </div>
        </div>
        <hr>
      </div>
    <!-- <div v-for="cartItem in $store.state.carts" :key="cartItem.id">
      {{ getItem(cartItem.id).id }}
      {{ getItem(cartItem.id).name }}
      {{ getItem(cartItem.id).price }}
      {{ cartItem.count }}
    </div> -->
      <div class="q-py-lg">
        <div class="row"><q-space/>
          <div class="text-h6 q-pt-lg">총 상품금액</div>
          <div class="text-h2 q-pt-sm q-px-sm">{{ total }} 원</div>
        </div>
        <div class="row q-pt-lg"><q-space/>
          <q-btn push color="primary" label="구매하기" style="width: 200px; font-size: 20px" @click="buy = true"/>
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

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cartCheck: [],
      // cartItems: this.$store.state.items.filter(item => item.cart === true)
      // cartItems: this.$store.state.items.filter(item => this.$store.state.carts.includes(item.id))
      cartItems: this.$store.state.carts.map(c => {
        const item = this.$store.state.items.find(item => item.id === c.id)
        return { ...item, ...c }
      }),
      buy: false
    }
  },
  computed: {
    // getItem () {
    //   return id => this.$store.state.items.find(item => item.id === id)
    // },
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
      // console.log(item)
      this.cartItems = this.cartItems.filter(x => x.id !== cartItem.id)
    },
    onSelRem () {
      if (this.cartCheck !== null) {
        for (var i = 0; i < this.cartCheck.length; i++) {
          this.cartItems = this.cartItems.filter(x => x.id !== this.cartCheck[i])
        }
      }
    }
  }
}
</script>
