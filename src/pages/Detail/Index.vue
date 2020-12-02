<template>
  <div class="content">
    <div class="q-pa-lg">
      <DetailInfo/>
      <DetailReference/>
    </div>
  </div>
</template>

<script>
import DetailInfo from './DetailInfo'
import DetailReference from './DetailReference'

export default {
  name: 'Detail',
  components: {
    DetailInfo,
    DetailReference
  },
  data () {
    return {
      confirm: false,
      buy: false
    }
  }
}
</script>
