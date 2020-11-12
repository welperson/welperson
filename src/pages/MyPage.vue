<template>
  <div class="content">
    <div class="q-pa-lg">
      <MyInfo/>
      <div class="row">
        <div class="col-3 q-pl-xl q-pt-md">
          <ManageMenu />
        </div>
        <div class="col-8">
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
</style>

<script>
import MyInfo from 'components/MyInfo'
import ManageMenu from 'components/ManageMenu'
import MyOrder from 'components/MyOrder'
import MyDelivery from 'components/MyDelivery.vue'
import MyReservation from 'components/MyReservation.vue'
import MyReview from 'components/MyReview.vue'
import MyQuestion from 'components/MyQuestion.vue'
import MyManage from 'components/MyManage.vue'

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
