<template>
  <div class="content">
    <div class="q-pa-lg">
      <div class="text-h1 text-primary">장바구니</div>
      <div class="row q-px-xl q-pt-xl">
        <div><q-checkbox size="sm" label="전체선택" val="all" v-model="all"/></div>
        <div><q-btn class="btn" flat label="선택삭제"/></div>
      </div>
      <hr>

      <!-- 장바구니 row -->
      <div class="row q-px-xl q-py-sm">
        <div><q-checkbox size="sm" val="all" v-model="all" style="padding-top: 30px"/></div>
        <div class="col-2"><img src="image/2.png" style="width: 150px; height: 100px;"></div>
        <div class="col-6 text-h5 text-secondary" style="padding-top: 40px">모던오피스 고급 스틸 연필꽂이</div>
        <div class="col-2" style="padding-top: 40px">
          <q-btn size="xs" label="-" @click="count--" />
          <input style="width: 30px" type="text" v-model="count">
          <q-btn size="xs" label="+" @click="count++" />
        </div>
        <div style="padding-top: 40px">21,500원</div>
        <div style="padding-top: 33px; padding-left: 38px"><q-btn flat label="X"/></div>
      </div>
      <hr>

      <!-- 장바구니 row -->
      <div class="row q-px-xl q-py-sm">
        <div><q-checkbox size="sm" val="all" v-model="all" style="padding-top: 30px"/></div>
        <div class="col-2"><img src="image/3.png" style="width: 150px; height: 100px;"></div>
        <div class="col-6 text-h5 text-secondary" style="padding-top: 40px">25절 A5 밴드 양장</div>
        <div class="col-2" style="padding-top: 40px">
          <q-btn size="xs" label="-" @click="count--" />
          <input style="width: 30px" type="text" v-model="count">
          <q-btn size="xs" label="+" @click="count++" />
        </div>
        <div style="padding-top: 40px">19,500원</div>
        <div style="padding-top: 33px; padding-left: 38px"><q-btn flat label="X"/></div>
      </div>
      <hr>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      all: [''],
      count: 0
    }
  }
}
</script>
