<template>
  <div>
    <div class="text-h1 text-primary q-py-xl">사무용품</div>
    <Products :items="items"/>
  </div>
</template>

<script>
import Products from 'components/Products'
import { mapGetters } from 'vuex'

export default {
  name: 'Office',
  components: {
    Products
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('products', {
      items: 'officeItems'
    })
  }
}
</script>
