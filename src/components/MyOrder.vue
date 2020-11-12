<template>
  <div>
    <h4>주문 내역</h4>
    <div>
      <div class="q-pt-md q-pb-xl">
        <div class="row justify-between">
          <span class="text-bold text-h5">2020.10.08</span>
          <q-btn class="text-primary" flat label="주문상세보기"><q-icon right name="mdi-chevron-right"/></q-btn>
        </div>
        <div class="row">
          <div class="col-3"><img src="image/2.png" style="width: 130px; height: 80px;"></div>
          <div class="col-7 q-pt-md">모던오피스 고급 스틸 연필꽂이</div>
        </div>
        <div class="row">
          <div class="col-3"><img src="image/1.png" style="width: 130px; height: 80px;"></div>
          <div class="col-7 q-pt-md">국산 하이큐 네임펜</div>
        </div>
      </div>

      <div class="q-pt-md">
        <div class="row justify-between">
          <span class="text-bold text-h5">2020.10.08</span>
          <q-btn class="text-primary" flat label="주문상세보기"><q-icon right name="mdi-chevron-right"/></q-btn>
        </div>
        <div class="row">
          <div class="col-3"><img src="image/3.png" style="width: 130px; height: 80px;"></div>
          <div class="col-7 q-pt-md">25절 A5 밴드 양장</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {

    }
  }
}
</script>
