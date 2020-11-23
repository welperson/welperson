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
        <span>너무 너무 만족합니다 !!<br>
        지인들에게도 추천하고 있어용 ㅎㅎ <br></span>
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
