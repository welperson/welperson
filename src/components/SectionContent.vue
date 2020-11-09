<template>
  <div class="content">
    <div class="q-pa-xl">
      <div class="text-h1 text-primary q-py-xl">
        {{ title }}
      </div>
      <div>
        <span class="text-h4 text-primary">IT 직군 </span>
        <span class="text-h4" style="color: #a6a6a6">이라면 필요할 걸 ?</span>
      </div>
      <div class="row items-start q-pa-xl ">
        <div class="col">
          <img src="image/1.png" style="height: 200px">
          <div>
            <div>국산 하이큐 네임펜</div>
            <div><span class="text-h6 q-pt-xs" style="color: #a6a6a6">15,000원 </span><span class="text-bold text-h4">12,000원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (20)</div>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="image/2.png" style="height: 200px">
          </div>
          <div>
            <div>모던오피스 고급 스틸 연필꽂이</div>
            <div><span class="text-bold text-h4">9,900원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (13)</div>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="image/3.png" style="height: 200px">
          </div>
          <div>
            <div>25절 A5 밴드 양장</div>
            <div><span class="text-h6 q-pt-xs" style="color: #a6a6a6">25,000원 </span><span class="text-bold text-h4">22,500원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (198)</div>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-xl">
      <div>
        <span class="text-h4" style="color: #a6a6a6">어서 와~ </span>
        <span class="text-h4 text-primary">맞춤 상품 </span>
        <span class="text-h4" style="color: #a6a6a6">은 처음이지 ?</span>
      </div>
      <div class="row items-start q-pa-xl">
        <div class="col">
          <img src="image/1.png" style="height: 200px">
          <div>
            <div>국산 하이큐 네임펜</div>
            <div><span class="text-h6 q-pt-xs" style="color: #a6a6a6">15,000원 </span><span class="text-bold text-h4">12,000원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (20)</div>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="image/2.png" style="height: 200px">
          </div>
          <div>
            <div>모던오피스 고급 스틸 연필꽂이</div>
            <div><span class="text-bold text-h4">9,900원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (13)</div>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="image/3.png" style="height: 200px">
          </div>
          <div>
            <div>25절 A5 밴드 양장</div>
            <div><span class="text-h6 q-pt-xs" style="color: #a6a6a6">25,000원 </span><span class="text-bold text-h4">22,500원</span></div>
            <div class="text-h6 q-pt-xs" style="color: #a6a6a6">리뷰 (198)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionContent',
  // props: ['title'],
  props: {
    title: String
  },
  data () {
    return {

    }
  }
}

</script>
