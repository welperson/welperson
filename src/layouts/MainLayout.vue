<template>
  <q-layout view="hHh Lpr fff" class="bg-white">
    <app-header />
    <app-footer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from './components/AppHeader'
// import AppDrawer from './components/AppDrawer'
import AppFooter from './components/AppFooter'
// import AppPageScroller from './components/AppPageScroller'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    // AppDrawer,
    AppFooter
    // AppPageScroller
  }
}
</script>
