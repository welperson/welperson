<template>
  <div class="content">
    <div class="q-pa-lg">
      <MyInfo/>
      <Manage :title="title"/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.row
  margin: 30px
  height: 200px
  .col
    padding: 40px 40px
    border: 1px solid #ed6665
    text-align: left
</style>

<script>
import MyInfo from 'components/MyInfo'
import Manage from 'components/Manage'

export default {
  name: 'MyPage',
  components: {
    MyInfo,
    Manage
  },
  data () {
    return {
      title: '주문 내역'
    }
  }
}
</script>
