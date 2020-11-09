<template>
  <q-page>
    <SectionContent :title="title"/>
  </q-page>
</template>

<script>
import SectionContent from 'components/SectionContent'

export default {
  name: 'PageCategory',
  components: {
    SectionContent
  },
  data () {
    return {
      title: '카테고리'
    }
  }
}
</script>
