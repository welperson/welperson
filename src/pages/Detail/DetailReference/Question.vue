<template>
  <div>
    <div class="q-py-lg">
      <div class="row">
        <h1>배송문의</h1>
        <div class="text-secondary q-pl-md q-pt-md question__date">2019.10.15</div>
      </div>
      <div class="q-pt-md question__text">
        배송 언제 출발 하나요???
      </div>
      <div class="row q-pt-md">
        <q-icon name="mdi-subdirectory-arrow-right" size="md"/>
        <div class="q-pt-sm question__text">고객님, 주문하신 상품은 2~3일 내로 출고될 예정입니다.</div>
      </div>
    </div>

    <div class="q-py-lg">
      <div class="row">
        <h1>상품문의</h1>
        <div class="text-secondary q-pl-md q-pt-md question__date">2020.09.28</div>
      </div>
      <div class="row q-pt-md question__text">
        <div>비밀글</div>
        <q-icon size="sm" name="mdi-lock-outline"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.question__date
  font-size: 20px
.question__text
  font-size: 17px
</style>

<script>
export default {
  name: 'Question',
  data () {
    return {

    }
  }
}
</script>
