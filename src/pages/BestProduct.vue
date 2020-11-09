<template>
  <q-page>
    <SectionContent :title="title"/>
  </q-page>
</template>

<script>
import SectionContent from 'components/SectionContent'

export default {
  name: 'PageBestProduct',
  components: {
    SectionContent
  },
  data () {
    return {
      title: '베스트'
    }
  }
}
</script>
