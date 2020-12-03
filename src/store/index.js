import Vue from 'vue'
import Vuex from 'vuex'

import address from './modules/address'
import products from './modules/products'
import hearts from './modules/hearts'
import carts from './modules/carts'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      products: products,
      address: address,
      hearts: hearts,
      carts: carts
    },
    strict: process.env.DEV
  })

  return Store
}
