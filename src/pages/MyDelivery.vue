<template>
  <div class="content">
    <div class="q-pa-lg">
      <MyInfo/>
      <div class="q-pl-xl">
        <div class="row">
          <div class="col-2 q-pt-md">
            <ManageMenu/>
          </div>
          <div class="col-8 q-pl-xl">
            <div class="text-h4">
              {{ title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInfo from 'components/MyInfo'
import ManageMenu from 'components/ManageMenu'

export default {
  name: 'MyPage',
  components: {
    MyInfo,
    ManageMenu
  },
  data () {
    return {
      title: '배송지 관리'
    }
  }
}
</script>
