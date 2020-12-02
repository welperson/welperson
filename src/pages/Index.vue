<template>
  <q-page>
    <Banners/>
    <section-intro/>
    <section-content/>
  </q-page>
</template>

<script>
import Banners from 'components/Banners'
import SectionIntro from 'components/SectionIntro'
import SectionContent from 'components/SectionContent'

export default {
  name: 'PageIndex',
  components: {
    Banners,
    SectionIntro,
    SectionContent
  }
}
</script>
