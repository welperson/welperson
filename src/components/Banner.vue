<template>
  <div class="banner">
    <q-tab-panels v-model="tab" animated class="bg-primary" style="height: 300px;">
      <q-tab-panel name="b1" >
        <div class="row">
          <div class="col-lg-4">
            <div class="row q-pt-lg text-white">
              <div class="text-h1">이 달의 후기왕</div>
              <div class="q-pl-sm"><q-icon name="mdi-crown-outline" color="yellow" size="xl"/></div>
            </div>
            <div class="q-pt-lg" style="font-size: 18px">이 달의 후기왕 10명에게</div>
            <div style="font-size: 18px"><span class="text-h4">100만원</span> 상당의 백화점 상품권을 쏜다 !!</div>
          </div>
          <div class="col-lg-2 q-pt-md">
            <q-img
            src="https://cdn.pixabay.com/photo/2020/10/17/12/48/money-5661928__340.png"
            width="200px"/>
          </div>
          <div>
            <q-img
            src="https://image.flaticon.com/icons/png/128/595/595555.png"
            width="100px"
            style="top: 150px"/>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="b2">
        <div class="row">
          <div class="col-lg-4">
            <div class="row q-pt-lg">
              <!-- <div class="q-pt-md"><q-img src="icons/logo2.png" style="width: 130px; background-color: white"/></div> -->
              <div class="q-pr-sm q-pt-lg text-h3 text-white">weperson</div>
              <div class="q-pl-sm q-pt-sm text-h1 text-white">회원 이벤트</div>
            </div>
            <div class="q-pt-lg" style="font-size: 18px">회원가입 시</div>
            <div style="font-size: 25px"><span class="text-h2">20%</span> 포인트 적립</div>
          </div>
          <div class="col-lg-1 q-pt-md q-pl-xl">
            <q-icon
            name="mdi-heart-multiple"
            color="accent"
            size="xl"
            style="top: 10px"/>
          </div>
          <div class="q-pl-lg q-pt-lg">
            <q-img
            src="https://image.flaticon.com/icons/png/512/287/287585.png"
            width="200px"/>
          </div>
          <div class="q-pl-lg">
            <q-icon
            name="mdi-heart-multiple"
            color="accent"
            size="xl"
            style="top: 180px"/>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="b3">
        <div class="row">
          <div class="col-lg-4">
            <div class="row q-pt-lg">
              <div class="text-h1 text-white">겨울맞이 한정세일</div>
              <div class="q-pl-sm"><q-icon name="mdi-sparkles" color="yellow" size="xl"/></div>
            </div>
            <div class="q-pt-lg" style="font-size: 18px">매일 밤 10시부터 11시까지</div>
            <div style="font-size: 18px"><span class="text-h4">1시간</span> 한정 세일 놓치지 마세요 !</div>
          </div>
          <div class="col-lg-1 q-pt-md">
            <q-icon
            name="mdi-party-popper"
            size="8em"
            color="accent"/>
          </div>
          <div class="q-pt-xl">
            <q-icon
            name="mdi-alarm"
            size="15em"
            class="q-pt-md"/>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <div>
      <q-tabs v-model="tab" class="text-secondary">
      <!-- <q-tabs v-model="tab" style="color: #a6a6a6"> -->
        <q-tab icon="mdi-circle" name="b1" />
        <q-tab icon="mdi-circle" name="b2" />
        <q-tab icon="mdi-circle" name="b3" />
      </q-tabs>
    </div>
  </div>
</template>

<style lang="sass">
.banner
  .q-tab-panels
    padding-left: 400px
    @media (max-width: $breakpoint-md)
      padding-left: 100px
    @media (max-width: $breakpoint-sm)
      padding-left: 50px
    @media (max-width: $breakpoint-xs)
      padding-left: 0px
  .q-tabs
    top: -48px
    left: 500px
    @media (max-width: $breakpoint-md)
      left: 300px
    @media (max-width: $breakpoint-sm)
      left: 250px
    @media (max-width: $breakpoint-xs)
      left: 50px

</style>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      tab: 'b1'
    }
  }
}
</script>
