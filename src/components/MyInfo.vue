<template>
  <div>
    <div class="text-h1 text-primary">마이페이지</div>
      <div class="row q-col-gutter-y-md">
        <div class="col">
          <div class="q-pt-lg"><span class="text-h1 text-bold">김유니</span><span class="text-h4">님</span></div>
        </div>
        <div class="col">
          <div class="text-h3 text-bold">잔여 포인트</div>
          <div class="q-pt-md q-pl-xs text-h6">1,000,000원</div>
          <div><q-btn flat class="text-primary q-pt-sm">상세보기 ></q-btn></div>
        </div>
        <div class="col">
          <div class="text-h3 text-bold">적립금</div>
          <div class="q-pt-md q-pl-xs text-h6">39원</div>
          <div><q-btn flat class="text-primary q-pt-sm">상세보기 ></q-btn></div>
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
export default {
  name: 'MyInfo',
  data () {
    return {

    }
  }
}
</script>
