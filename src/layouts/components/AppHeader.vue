<template>
  <q-header class="bg-white text-secondary" >
    <q-toolbar class="q-pb-xl">
      <q-space/>
      <q-btn-dropdown flat color="primary" label="김유니 님">
      <q-list v-for="item in items" :key="item.id">
        <q-item clickable v-close-popup @click="onRoute(item.id)">
          <q-item-section avatar>
            <q-avatar :icon="item.icon" text-color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      <q-btn flat color="secondary" label="로그아웃" @click="logout = true"/>
    </q-toolbar>
    <q-toolbar>
      <router-link :to="'/'">
        <img class="logo absolute-center q-px-xl" src="icons/logo.png">
      </router-link>
    </q-toolbar>
    <q-toolbar class="row q-pt-lg">
      <router-link v-for="category in categories" :key="category.id" :to="category.id" class="btn">
        <q-btn v-if="category.icon" class="col-xs-1 col-md-2 col-lg-1 text-bold btn-big" flat color="accent" :label="category.name" :icon="category.icon" />
        <q-btn v-else class="col-xs-1 col-md-2 col-lg-1 text-bold btn-small" flat color="accent" :label="category.name" />
      </router-link>
      <q-space/>
      <router-link v-for="menu in menus" :key="menu.id" :to="menu.id" class="btn">
        <q-btn class="col-xs-1 col-md-1 col-lg-1 btn-icon" flat color="primary" :icon="menu.name"/>
      </router-link>
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
.q-btn-dropdown
  width: 130px

.logo
  width: 430px
.btn
  text-decoration: none
.btn-big
  width: 120px
.btn-small
  width: 71px
.btn-icon
  width: 40px

</style>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      logout: false,
      items: [
        { id: 'history', name: '주문 내역', icon: 'mdi-gift-outline' },
        { id: 'delivery', name: '배송지 관리', icon: 'mdi-truck-delivery-outline' },
        { id: 'reservation', name: '예약 조회', icon: 'mdi-airplane' },
        { id: 'review', name: '상품 후기', icon: 'mdi-border-color' },
        { id: 'question', name: '문의 내역', icon: 'mdi-comment-question-outline' },
        { id: 'manage', name: '개인 정보 관리', icon: 'mdi-account' }
      ],
      menus: [
        { id: '/favorite', name: 'mdi-heart-outline' },
        { id: '/cart', name: 'mdi-cart-outline' },
        { id: '/mypage?tab=history', name: 'mdi-account-outline' }
      ],
      categories: [
        { id: '/category', name: '카테고리', icon: 'mdi-menu' },
        { id: '/new', name: '신상품' },
        { id: '/best', name: '베스트' }
      ]
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
