export default {
  getCom: (state) => (name) => {
    return state.items.filter(item => item.types.includes(name))
  }
}
