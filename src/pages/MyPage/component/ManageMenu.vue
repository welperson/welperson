
<template>
  <div class="menu">
    <q-btn v-for="menu in menus" :key="menu.id" class="menu__col" @click="onRoute(menu.id)" icon-right="mdi-chevron-right">{{ menu.name }}</q-btn>
  </div>
</template>

<style lang="sass">
.menu
  padding-left: 30px
  padding-top: 40px
.menu__col
  width: 140px

</style>

<script>
export default {
  name: 'ManageMenu',
  data () {
    return {
      menus: [
        { name: '주문 내역', id: 'history' },
        { name: '배송지 관리', id: 'delivery' },
        { name: '예약 조회', id: 'reservation' },
        { name: '상품 후기', id: 'review' },
        { name: '문의 내역', id: 'question' },
        { name: '개인 정보 관리', id: 'manage' }
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
