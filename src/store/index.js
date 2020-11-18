import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
// import mutation from './mutation'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state,
    strict: process.env.DEV
  })

  return Store
}
