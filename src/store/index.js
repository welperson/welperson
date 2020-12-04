import Vue from 'vue'
import Vuex from 'vuex'

import address from './modules/address'
import products from './modules/products'
import hearts from './modules/hearts'
import carts from './modules/carts'
import orders from './modules/orders'
import questions from './modules/questions'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      products: products,
      address: address,
      hearts: hearts,
      carts: carts,
      orders: orders,
      questions: questions,
      reviews: reviews
    },
    strict: process.env.DEV
  })

  return Store
}
