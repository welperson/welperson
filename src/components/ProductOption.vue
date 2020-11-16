<template>
  <div>
    <slot name="Poption">
    <div class="row q-py-sm">
      <div class="q-pt-sm q-pl-sm">{{ product }}</div><q-space/>
      <div><q-btn flat label="X"/></div>
    </div>
    <div class="row q-pb-xs">
      <div class="q-pl-sm">
        <q-btn size="xs" label="-" @click="count--" />
        <input style="width: 30px" type="text" v-model="count">
        <q-btn size="xs" label="+" @click="count++" />
      </div><q-space/>
      <div class="q-pr-sm">22500원</div>
    </div>
    </slot>
  </div>
</template>

<style lang="sass">
.product-box
  outline: 1px solid #a6a6a6
</style>

<script>
export default {
  name: 'ProductOption',
  props: {
    product: null,
    count: Number
  }
}

</script>
