<template>
  <div>{{ items.name }}</div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      items: this.$store.state.items
    }
  }
}
</script>
