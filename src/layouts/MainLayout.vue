<template>
  <q-layout view="hHh Lpr fff" class="bg-white">
    <app-header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <app-footer />
    <app-page-scroller />
  </q-layout>
</template>

<style lang="sass">
// .content, .q-header, .intro, .banner
//   font-family: "NanumBarunpen", Arial, Helvetica, sans-serif
.content, .q-header, .intro, .banner
  font-family: "NanumSquareRound", Arial, Helvetica, sans-serif
</style>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppPageScroller from './components/AppPageScroller'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    AppPageScroller
  }
}
</script>
