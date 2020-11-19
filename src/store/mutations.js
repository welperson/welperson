export default {
  updateCount (state, count) {
    state.items.cartCnt = count
  },
  changeHeart (state, n) {
    state.check += n
  }
}
