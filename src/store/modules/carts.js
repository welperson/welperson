export default {
  namespaced: true,
  state: {
    items: [
      { id: '1', count: 1, opt: '실버' },
      { id: '2', count: 1, opt: '검정' },
      { id: '3', count: 1, opt: '실버' },
      { id: '6', count: 1, opt: '메이플' },
      { id: '9', count: 1, opt: '단일' },
      { id: '14', count: 1, opt: '매콤해물' },
      { id: '18', count: 1, opt: '물걸레 청소포' }
    ]
  },
  mutations: {
    inCart (state, payload) {
      if (payload.id !== '') {
        state.carts.push({ id: payload.id, count: 1 })
      }
    }
  }
}
