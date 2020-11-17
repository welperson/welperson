
<template>
  <div class="menu">
  <!-- <div class="col" v-for="menu in menus" :key="menu.id">
    <q-btn>{{menu.name}}<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
  </div> -->
    <div><q-btn @click="onRoute('history')">주문 내역<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
    <div><q-btn @click="onRoute('delivery')">배송지 관리<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
    <div><q-btn @click="onRoute('reservation')">예약 조회<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
    <div><q-btn @click="onRoute('review')">상품 후기<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
    <div><q-btn @click="onRoute('question')">문의 내역<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
    <div><q-btn @click="onRoute('manage')">개인 정보 관리<q-icon class="icon" name="mdi-chevron-right"/></q-btn></div>
  </div>
</template>

<style lang="sass">
.menu
  padding-left: 30px
  padding-top: 20px
  .col
    width: 140px

</style>

<script>
export default {
  name: 'ManageMenu',
  data () {
    return {
      // menus: this.$store.state.menus
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
