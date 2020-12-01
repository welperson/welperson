<template>
  <div>
    <div class="q-py-lg" v-for="review in reviews" :key="review.id">
      <div class="row">
        <div v-if="review.title === '만족해요'" class="text-h1 text-primary">{{ review.title }}</div>
        <div v-else class="text-h1 text-secondary">{{ review.title }}</div>
        <div>
          <q-icon v-if="review.title === '만족해요'" class="q-pa-xs text-primary" name="mdi-emoticon-happy-outline" size="xl"/>
          <q-icon v-else class="q-pa-xs text-secondary" name="mdi-emoticon-cry-outline" size="xl"/>
        </div>
        <div class="q-pl-md q-pt-md" style="font-size: 20px">{{ review.date }}</div>
      </div>
      <div class="q-pt-md">
        <span>{{ review.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data () {
    return {
      reviews: [
        { id: 1, title: '만족해요', date: '2019.10.15', text: '너무 너무 만족합니다 !! 지인들에게도 추천하고 있어용ㅎㅎ' },
        { id: 2, title: '별로예요', date: '2020.09.28', text: '많이 기대했는데 실망했어요 ㅠㅠ' }
      ]
    }
  }
}
</script>
