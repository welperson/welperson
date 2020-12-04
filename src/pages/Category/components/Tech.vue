<template>
  <div>
    <div class="text-h1 text-primary q-py-md">테크/가전</div>
    <Products :items="items"/>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'Tech',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      items: 'techItems'
    })
  }
}
</script>
