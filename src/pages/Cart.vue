<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">장바구니</div>
      <div class="row q-px-xl q-pt-xl">
        <div><q-checkbox size="sm" label="전체선택" v-model="selectAll"/></div>
        <div><q-btn class="btn" flat label="선택삭제" @click="onSelRem"/></div>
      </div>
      <hr>

      <div v-for="item in cartItems" :key="item.id">
        <div class="row q-px-xl q-py-sm">
          <div><q-checkbox size="sm" :val="item.id" v-model="cartCheck" style="padding-top: 30px"/></div>
          <div class="col-sm-5 col-md-2"><img class="cartImg" :src="item.img" style="width: 150px; height: 100px;"></div>
          <div class="col-xs-10 col-sm-7 col-md-5 text-secondary" style="padding-top: 30px">
            <div class="text-h5">{{ item.name }}</div>
            <div>{{ item.exp }}</div>
          </div>
          <div style="padding-top: 40px;">
            <q-btn size="xs" label="-" @click="item.cartCnt--" />
            <input style="width: 30px" type="text" v-model="item.cartCnt">
            <q-btn size="xs" label="+" @click="item.cartCnt++" />
          </div>
          <div class="row q-pl-xl">
            <div style="padding-top: 40px;">{{ 0 + item.price*item.cartCnt }} 원</div>
            <div style="padding-top: 33px; padding-left: 38px"><q-btn flat label="X" @click="onRemove(item)"/></div>
          </div>
        </div>
        <hr>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cartCheck: [],
      cartItems: this.$store.state.items.filter(item => item.cart === true)
      // cartItems: this.$store.state.items.filter(item => this.$store.state.carts.includes(item.id))
    }
  },
  methods: {
    onRemove (item) {
      // console.log(item)
      this.cartItems.splice(item, 1)
    },
    onSelRem () {
      if (this.cartCheck !== null) {
        for (var i = 0; i < this.cartCheck.length; i++) {
          const index = this.cartItems.indexOf(this.cartCheck[i])
          this.cartItems.splice(index, 1)
        }
      }
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
          this.cartItems.forEach(function (item) {
            cartCheck.push(item.id)
          })
        }
        this.cartCheck = cartCheck
      }
    }
  }
}
</script>
