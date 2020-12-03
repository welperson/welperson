<template>
  <div>
    <h4 class="q-pb-lg">배송지 관리</h4>
    <div class="delivery q-pt-md q-pb-xl">
      <div class="row text-h6 q-py-sm text-center">
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1" >선택</div>
        <div class="col-xs-2 col-sm-4 col-md-4 col-lg-4" >주소</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >받으실 분</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >연락처</div>
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1" >수정</div>
      </div>

      <div class="row q-pt-lg text-center items-center" v-for="add in adds" :key="add.id">
        <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1">
          <q-radio keep-color color="primary" :val="add.id" v-model="select" />
        </div>
        <div class="col-xs-3 col-sm-4 col-md-4 col-lg-4">{{ add.address }}</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">{{ add.person }}</div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">{{ add.num }}</div>
        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <q-btn flat size="9px" icon="mdi-pencil-outline"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDelivery',
  data () {
    return {
      adds: this.$store.state.address.adds,
      select: ''
    }
  }
}
</script>
