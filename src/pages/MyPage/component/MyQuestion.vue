<template>
  <div>
    <h4 class="q-pb-lg">문의 내역</h4>
    <div>
      <h5 class="q-py-md text-center">내가 문의한 내역</h5>
      <div v-for="item in questionItems" :key="item" class="row q-py-md items-center">
        <div class="col-xs-5 col-sm-4 col-md-3"><img :src="item.img" class="myquestion__img"></div>
        <div class="col-xs-7 col-sm-6 col-md-7 q-pl-lg">
          <h6>{{ item.name }}</h6>
          <div class="q-pt-sm">{{ item.text }}</div>
        </div>
        <div v-if="item.answer" class="col-xs-5 col-sm-2 col-md-2 text-blue">답변 완료</div>
        <div v-else class="col-xs-5 col-sm-2 col-md-2 text-red">답변 미완료</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.myquestion__img
  width: 100%
  height: auto
</style>

<script>
export default {
  name: 'MyQuestion',
  data () {
    return {
      questionItems: this.$store.state.questions.items.map(q => {
        const item = this.$store.state.products.items.find(item => item.id === q.id)
        return { ...item, ...q }
      })
    }
  }
}
</script>
