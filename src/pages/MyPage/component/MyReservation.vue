<template>
  <div>
    <h4 class="q-pb-lg">예약 조회</h4>
    <div>
      <div v-for="item in orderItems" :key="item.id" class="q-pt-md q-pb-xl">
        <div class="row justify-between">
          <h5 class="text-bold">{{ item.date }}</h5>
          <q-btn class="text-primary" flat label="예약상세보기"><q-icon right name="mdi-chevron-right"/></q-btn>
        </div>
        <div class="row items-center">
          <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3"><img :src="item.img" class="myorder__img"></div>
          <div class="col-xs-7 q-pl-lg">
            <div>{{ item.name }}</div>
            <div>{{ item.opt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.myorder__img
  width: 100%
  height: auto
</style>

<script>
export default {
  name: 'MyReservation',
  data () {
    return {
      orderItems: this.$store.state.orders.items.map(o => {
        const item = this.$store.state.products.items.find(item => item.id === o.id)
        return { ...item, ...o }
      })
    }
  }
}
</script>
