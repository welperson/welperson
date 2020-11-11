
<template>
  <div class="menu">
    <!-- <div class="col" v-for="menu in menus" :key="menu.id">
      <q-btn>{{menu.name}}<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    </div> -->
    <q-btn @click="$router.push('/mypage')">주문 내역<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    <q-btn @click="$router.push('/mydelivery')">배송지 관리<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    <q-btn>예약 조회<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    <q-btn>상품 후기<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    <q-btn>문의 내역<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
    <q-btn>개인 정보 관리<q-icon class="icon" name="mdi-chevron-right"/></q-btn>
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
  }
}
</script>
