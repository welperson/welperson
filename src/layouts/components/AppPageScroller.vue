<template>
  <q-page-scroller position="bottom-right" :scroll-offset="500" :offset="$q.screen.xs ? [8, 8] : [16, 16]">
    <q-btn icon="mdi-chevron-up" color="primary" fab-mini dense />
  </q-page-scroller>
</template>

<script>
export default {
  name: 'AppPageScroller'
}
</script>
