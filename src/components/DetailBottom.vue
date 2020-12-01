<template>
  <div class="q-pt-xl">
    <div class="q-pt-xl">
      <q-tabs v-model="t" dense class="d-bottom text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
        <q-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="t" animated>
        <q-tab-panel v-for="tab in tabs" :key="tab.name" :name="tab.name">
           <component :is="tab.component" />
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
  data () {
    return {
      t: 'description',
      tabs: [
        { name: 'description', label: '상품 설명', component: Description },
        { name: 'review', label: '상품 후기', component: Review },
        { name: 'question', label: '상품 문의', component: Question }
      ]
    }
  }
}
</script>
