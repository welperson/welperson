<template>
  <q-header class="bg-white text-secondary" >
    <q-toolbar class="q-pb-xl">
      <q-space/>
      <q-btn-dropdown flat color="primary" label="김유니 님" style="width : 130px">
      <q-list>
        <q-item clickable v-close-popup @click="onRoute('history')">
          <q-item-section avatar>
            <q-avatar icon="mdi-gift-outline" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>주문 내역</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onRoute('delivery')">
          <q-item-section avatar>
            <q-avatar icon="mdi-truck-delivery-outline" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>배송지 관리</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onRoute('reservation')">
          <q-item-section avatar>
            <q-avatar icon="mdi-airplane" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>예약 조회</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onRoute('review')">
          <q-item-section avatar>
            <q-avatar icon="mdi-border-color" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>상품 후기</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onRoute('question')">
          <q-item-section avatar>
            <q-avatar icon="mdi-comment-question-outline" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>문의 내역</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onRoute('manage')">
          <q-item-section avatar>
            <q-avatar icon="mdi-account" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>개인 정보 관리</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      <q-btn flat color="secondary" label="로그아웃" @click="logout = true"/>
    </q-toolbar>
    <q-toolbar>
      <img class="logo absolute-center q-px-xl" style="width: 430px;" src="icons/logo5.png" alt="logo" @click="$router.push('/')">
    </q-toolbar>
    <q-toolbar class="row q-pt-lg">
      <q-btn class="col-xs-1 col-md-2 col-lg-1 text-bold cate" style="width: 120px" flat color="accent" label="카테고리" icon="mdi-menu" @click="$router.push('/category')"/>
      <q-btn class="col-xs-1 col-md-2 col-lg-1 text-bold sinsang" style="width: 71px" flat color="accent" label="신상품" @click="$router.push('/new')"/>
      <q-btn class="col-xs-1 col-md-2 col-lg-1 text-bold best" style="width: 71px" flat color="accent" label="베스트" @click="$router.push('/best')"/>
      <q-space/>
      <q-btn class="col-xs-1 col-md-1 col-lg-1 h" style="width: 40px" flat color="primary" icon="mdi-heart-outline" @click="$router.push('/favorite')"/>
      <q-btn class="col-xs-1 col-md-1 col-lg-1 c" style="width: 40px" flat color="primary" icon="mdi-cart-outline" @click="$router.push('/cart')"/>
      <q-btn class="col-xs-1 col-md-1 col-lg-1 a" style="width: 40px" flat color="primary" icon="mdi-account-outline" @click="$router.push('/mypage')"/>
    </q-toolbar>

    <q-dialog v-model="logout" persistent>
            <q-card style="width: 400px">
              <q-card-section class="row items-center">
                <q-avatar class="q-ml-sm" icon="mdi-emoticon-sad" color="primary" text-color="white" />
                <span class="q-ml-md">정말로 나가시겠습니까 ? </span>
              </q-card-section>
              <q-card-actions align="right" class="q-pr-md">
                <q-btn flat label="아니요 ㅠㅠ" color="primary" v-close-popup />
                <q-btn flat label="네, 나갈래요!" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
  </q-header>
</template>

<style lang="sass">
.selectBox
  .q-field__native
    color: #7f7f7f
.q-virtual-scroll__content
   .q-item
     color: #7f7f7f

.h, .c
  padding-right: 55px
  @media (max-width: $breakpoint-xs)
    padding-right: 0px

</style>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      logout: false
    }
  },
  methods: {
    onRoute (tab) {
      if (tab !== this.$route.query.tab) {
        this.$router.replace(`/mypage?tab=${tab}`)
      }
    }
  }
}

</script>
