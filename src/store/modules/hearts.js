export default {
  namespaced: true,
  state: {
    heart: ['1', '3', '5', '6', '10', '11', '12', '15', '18']
  },
  mutations: {
    inHeart (state, id) {
      if (!state.heart.includes(id)) {
        state.heart.push(id)
      } else {
        state.heart = state.heart.filter(x => x !== id)
      }
    }
  }
}
