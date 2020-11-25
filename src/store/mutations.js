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
  },
  inCart (state, payload) {
    if (payload.id !== '') {
      state.carts.push({ id: payload.id, count: 1 })
    }
  }
}
