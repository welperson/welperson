<template>
  <div class="content">
    <div class="q-pa-lg">
      <MyInfo/>
      <div class="row q-pt-lg" style="height: 100%">
        <div class="col-sm-4 col-md-3 q-pl-xl q-pt-md q-pb-xl menuSt">
          <ManageMenu />
        </div>
        <div class="col-xs-12 col-sm-11 col-md-8">
          <div v-for="menu in menus" :key="menu.id">
            <div v-if="!tab || tab === menu.id">
              <component :is="menu.component" />
            </div>
            <div v-else-if="tab === menu.id">
              <component :is="menu.component" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.row
  margin: 30px
  height: 200px
  .col
    padding: 40px 40px
    border: 1px solid #ed6665
    text-align: left

.menuSt
  @media (max-width: $breakpoint-sm)
    padding-left: 0px
</style>

<script>
import MyInfo from './component/MyInfo'
import ManageMenu from './component/ManageMenu'
import MyOrder from './component/MyOrder'
import MyDelivery from './component/MyDelivery'
import MyReservation from './component/MyReservation'
import MyReview from './component/MyReview'
import MyQuestion from './component/MyQuestion'
import MyManage from './component/MyManage'

export default {
  name: 'MyPage',
  components: {
    MyInfo,
    ManageMenu
  },
  data () {
    return {
      menus: [
        { id: 'history', component: MyOrder },
        { id: 'delivery', component: MyDelivery },
        { id: 'reservation', component: MyReservation },
        { id: 'review', component: MyReview },
        { id: 'question', component: MyQuestion },
        { id: 'manage', component: MyManage }
      ]
    }
  },
  computed: {
    tab () {
      return this.$route.query.tab
    }
  }
}
</script>
