<template>
  <div class="content">
    <div class="q-pa-lg">
      <div><CategoryMenu/></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CategoryMenu from './components/CategoryMenu'

export default {
  name: 'Category',
  components: {
    CategoryMenu
  },
  data () {
    return {

    }
  }
}
</script>
