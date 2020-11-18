<template>
  <!-- 상품후기 -->
  <div>
    <div class="q-py-lg">
      <div class="row">
        <div class="text-h1 text-primary">만족해요</div>
        <div><q-icon class="q-pa-xs text-primary" name="mdi-emoticon-happy-outline" size="xl"/></div>
        <div class="q-pl-md q-pt-md" style="font-size: 20px">2019.10.15</div>
      </div>
      <div class="q-pt-md">
        <span>만두 너무 맛있어서 마트에서 계속 사먹다가 <br>
        이제 여기서만 주문하고 있습니다 ~~ <br>
        고기가 중간중간 씹히고 얇은 피에 냄새도 안나고 너무너무 맛있습니다 :)</span>
      </div>
    </div>

    <div class="q-py-lg">
      <div class="row">
        <div class="text-h1 text-secondary">별로예요</div>
        <div><q-icon class="q-pa-xs text-secondary" name="mdi-emoticon-cry-outline" size="xl"/></div>
        <div class="q-pl-md q-pt-md" style="font-size: 20px">2020.09.28</div>
      </div>
      <div class="q-pt-md">
        <span>많이 기대했는데 실망했어요 ㅠㅠ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data () {
    return {

    }
  }
}
</script>
