<template>
  <div class="banner">
    <q-tab-panels v-model="t" animated class="bg-primary" style="height: 300px;">
      <q-tab-panel v-for="tab in tabs" :key="tab.name" :name="tab.name">
        <component :is="tab.component" />
      </q-tab-panel>
    </q-tab-panels>

    <div>
      <q-tabs v-model="t" class="text-secondary">
        <q-tab v-for="tab in tabs" :key="tab.name" icon="mdi-circle" :name="tab.name" />
      </q-tabs>

    </div>
  </div>
</template>

<script>
import banner1 from 'components/Banners/banner1'
import banner2 from 'components/Banners/banner2'
import banner3 from 'components/Banners/banner3'

export default {
  name: 'Banners',
  data () {
    return {
      t: 'b1',
      tabs: [
        { name: 'b1', component: banner1 },
        { name: 'b2', component: banner2 },
        { name: 'b3', component: banner3 }
      ]
    }
  }
}
</script>
