<template>
  <!-- 상품설명 -->
  <div class="q-pt-xl">
    <div class="q-pt-xl">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
        style="width: 500px; height: 50px;"
      >
        <q-tab name="description" label="상품설명" />
        <q-tab name="review" label="상품후기" />
        <q-tab name="question" label="상품문의" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="description">
           <Description/>
        </q-tab-panel>

        <q-tab-panel name="review">
          <Review/>
        </q-tab-panel>

        <q-tab-panel name="question">
          <Question/>
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import Description from 'components/Description'
import Review from 'components/Review'
import Question from 'components/Question'

export default {
  name: 'DetailBottom',
  components: {
    Description,
    Review,
    Question
  },
  data () {
    return {
      tab: 'description'
    }
  }
}
</script>
