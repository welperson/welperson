<template>
  <q-page>
    <SectionContent :title="title"/>
  </q-page>
</template>

<script>
import SectionContent from 'components/SectionContent'

export default {
  name: 'PageNewProduct',
  components: {
    SectionContent
  },
  data () {
    return {
      title: '신상품'
    }
  }
}
</script>
