<template>
  <q-page>
    <Banner/>
    <section-intro/>
    <section-content/>
  </q-page>
</template>

<script>
import Banner from 'components/Banner'
import SectionIntro from 'components/SectionIntro'
import SectionContent from 'components/SectionContent'

export default {
  name: 'PageIndex',
  components: {
    Banner,
    SectionIntro,
    SectionContent
  }
}
</script>
