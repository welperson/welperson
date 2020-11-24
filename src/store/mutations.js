export default {
  updateCount (state, count) {
    state.items.cartCnt = count
  },
  inHeart (state, id) {
    if (!state.heart.includes(id)) {
      state.heart.push(id)
    } else {
      state.heart = state.heart.filter(x => x !== id)
    }
  }
  // inCart (state, id) {
  //   if (!state.carts.find(id)) {
  //     state.carts.push({ id: id, count: 1 })
  //   }
  // }
}
