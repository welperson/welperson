<template>
  <div class="content">
    <div class="q-pa-lg">
      <MyInfo/>
      <div class="row" style="height: 100%">
        <div class="col-sm-4 col-md-3 q-pl-xl q-pt-md q-pb-xl menuSt">
          <ManageMenu />
        </div>
        <div class="col-xs-12 col-sm-11 col-md-8">
          <div v-if="!tab || tab === 'history'">
            <MyOrder />
          </div>
          <div v-else-if="tab === 'delivery'">
            <MyDelivery />
          </div>
          <div v-else-if="tab === 'reservation'">
            <MyReservation />
          </div>
          <div v-else-if="tab === 'review'">
            <MyReview />
          </div>
          <div v-else-if="tab === 'question'">
            <MyQuestion />
          </div>
          <div v-else-if="tab === 'manage'">
            <MyManage />
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
import MyInfo from 'components/My/MyInfo'
import ManageMenu from 'components/My/ManageMenu'
import MyOrder from 'components/My/MyOrder'
import MyDelivery from 'components/My/MyDelivery.vue'
import MyReservation from 'components/My/MyReservation.vue'
import MyReview from 'components/My/MyReview.vue'
import MyQuestion from 'components/My/MyQuestion.vue'
import MyManage from 'components/My/MyManage.vue'

export default {
  name: 'MyPage',
  components: {
    MyInfo,
    ManageMenu,
    MyOrder,
    MyDelivery,
    MyReservation,
    MyReview,
    MyQuestion,
    MyManage
  },
  data () {
    return {
      title: '주문 내역'
    }
  },
  computed: {
    tab () {
      return this.$route.query.tab
    }
  }
}
</script>
