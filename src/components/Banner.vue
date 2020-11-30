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
      .q-img
        @media (max-width: $breakpoint-xs)
          width: 0px
  .q-tabs
    top: -48px
    left: 500px
    @media (max-width: $breakpoint-md)
      left: 300px
    @media (max-width: $breakpoint-sm)
      left: 250px
    @media (max-width: $breakpoint-xs)
      left: 50px

  .icn
    top: 180px
    @media (max-width: $breakpoint-xs)
      top: 0px

  .img1
    width: 200px
    @media (max-width: $breakpoint-xs)
      width: 0px
  .img2
    width: 100px
    @media (max-width: $breakpoint-xs)
      width: 0px
  .img3
    width: 200px
    @media (max-width: $breakpoint-xs)
      width: 0px
</style>

<script>
import banner1 from 'components/Banners/banner1'
import banner2 from 'components/Banners/banner2'
import banner3 from 'components/Banners/banner3'

export default {
  name: 'Banner',
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
