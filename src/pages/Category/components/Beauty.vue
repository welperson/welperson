<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">뷰티</div>
    <Products :items="items"/>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'Beauty',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      items: 'beautyItems'
    })
  }
}
</script>
