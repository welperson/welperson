<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">홈리빙</div>
    <Products :items="items"/>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      items: 'homeItems'
    })
  }
}
</script>
