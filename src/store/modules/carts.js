export default {
  namespaced: true,
  state: {
    items: [
      { id: '1', count: 1 },
      { id: '2', count: 1 },
      { id: '3', count: 1 },
      { id: '6', count: 1 },
      { id: '9', count: 1 },
      { id: '14', count: 1 },
      { id: '18', count: 1 }
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
