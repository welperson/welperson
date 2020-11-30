<template>
  <div>
    <h4>배송지 관리</h4>
    <div class="delivery q-pt-md q-pb-xl">
      <div class="row text-h6 q-py-sm">
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1" style="text-align: center">선택</div>
        <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4" style="text-align: center">주소</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center">받으실 분</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center">연락처</div>
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1" style="text-align: center">수정</div>
      </div>

      <div class="row q-pt-lg" v-for="add in adds" :key="add.id">
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1" style="text-align: center">
          <q-radio keep-color color="primary" :val="add.id" v-model="select" />
        </div>
        <div class="col-xs-3 col-sm-4 col-md-4 col-lg-4" style="text-align: center">{{ add.address }}</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center">{{ add.person }}</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: center">{{ add.num }}</div>
        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style="text-align: center">
          <q-btn flat size="9px" icon="mdi-pencil-outline"/>
        </div>
      </div>
    </div>
    <!-- <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae id eum minus voluptatem nemo! Suscipit sapiente nostrum quasi dignissimos voluptas animi laborum incidunt, odit labore quis delectus hic dolor ex?</h1> -->
  </div>
</template>

<script>
export default {
  name: 'MyDelivery',
  data () {
    return {
      adds: this.$store.state.adds,
      select: ''
    }
  }
}
</script>
