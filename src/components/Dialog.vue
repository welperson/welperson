<template>
  <q-dialog :v-model="name" persistent>
    <q-card style="width: 400px">
      <q-card-section class="row items-center">
        <q-avatar class="q-ml-sm" :icon="icon" color="primary" text-color="white" />
        <span class="q-ml-md">{{ text }} </span>
      </q-card-section>
      <q-card-actions align="right" class="q-pr-md">
        <q-btn flat :label="no" color="primary" v-close-popup />
        <q-btn flat :label="yes" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    name: Boolean,
    icon: String,
    text: String,
    no: String,
    yes: String
  },
  data () {
    return {

    }
  }
}
</script>
