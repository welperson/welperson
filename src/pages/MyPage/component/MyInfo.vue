<template>
  <div>
    <h1 class="text-primary q-py-md">마이페이지</h1>
      <div class="row q-col-gutter-y-md items-center myinfo__box">
        <div class="col-xs-12 col-md-4 myinfo__box--col1">
          <span class="text-h1 text-bold q-pl-md">김유니</span><span class="text-h3"> 님</span>
        </div>
        <div class="col-xs-12 col-md-4 myinfo__box--col2">
          <h3 class="q-pl-md text-bold">잔여 포인트</h3>
          <h6 class="q-pt-md q-pl-md">{{ $store.state.products.point }} 원</h6>
          <q-btn flat class="text-primary q-pt-sm q-pl-xs">상세보기 ></q-btn>
        </div>
        <div class="col-xs-12 col-md-4 myinfo__box--col2">
          <h3 class="q-pl-md text-bold">적립금</h3>
          <h6 class="q-pt-md q-pl-md">{{ $store.state.products.accum }} 원</h6>
          <q-btn flat class="text-primary q-pt-sm q-pl-xs">상세보기 ></q-btn>
        </div>
      </div>
  </div>
</template>

<style lang="sass" scoped>
.myinfo__box
  height: 100%
  margin: 30px
  background-color: #d0f0fd
.myinfo__box--col1, .myinfo__box--col2
  border: 1px solid #afe2f6
  text-align: left
.myinfo__box--col1
  padding: 69px 40px
.myinfo__box--col2
  padding: 40px

</style>

<script>
export default {
  name: 'MyInfo',
  data () {
    return {

    }
  }
}
</script>
