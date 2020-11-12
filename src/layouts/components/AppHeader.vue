<template>
  <q-header class="bg-white text-secondary" >
    <q-toolbar>
      <q-space/>
      <q-select class="selectBox" borderless v-model="selected" :options="options">
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-btn flat color="secondary" label="로그아웃"/>
    </q-toolbar>
    <q-toolbar>
      <img class="logo absolute-center" src="icons/logo.png" alt="logo" @click="$router.push('/')">
    </q-toolbar>
    <q-toolbar>
      <q-btn flat color="accent" label="카테고리" icon="mdi-menu" @click="$router.push('/category')"/>
      <q-btn flat color="accent" label="신상품" @click="$router.push('/new')"/>
      <q-btn flat color="accent" label="베스트" @click="$router.push('/best')"/>
      <q-space/>
      <q-btn flat color="primary" icon="mdi-heart-outline" @click="$router.push('/favorite')"/>
      <q-btn flat color="primary" icon="mdi-cart-outline" @click="$router.push('/cart')"/>
      <q-btn flat color="primary" icon="mdi-account-outline" @click="$router.push('/mypage')"/>
    </q-toolbar>
  </q-header>
</template>

<style lang="sass">
.selectBox
  .q-field__native
    color: #7f7f7f
.q-virtual-scroll__content
   .q-item
     color: #7f7f7f
</style>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      selected: '김유니 님',
      options: [
        {
          label: '주문 내역',
          value: '주문 내역',
          icon: 'mdi-gift-outline'
        },
        {
          label: '배송지 관리',
          value: '배송지 관리',
          icon: 'mdi-truck-delivery-outline'
        },
        {
          label: '예약 조회',
          value: '예약 조회',
          icon: 'mdi-airplane'
        },
        {
          label: '상품 후기',
          value: '상품 후기',
          icon: 'mdi-border-color'
        },
        {
          label: '문의 내역',
          value: '문의 내역',
          icon: 'mdi-comment-question-outline'
        },
        {
          label: '개인 정보 관리',
          value: '개인 정보 관리',
          icon: 'mdi-account'
        }
        // '주문 내역', '배송지 관리', '예약 조회', '상품 후기', '문의 내역', '개인 정보 관리'
      ]
    }
  }
}

</script>
