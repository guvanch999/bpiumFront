export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async makeOrder({}, data) {
    await this.$axios.post('https://crazy-ant-sheath-dress.cyclic.app/make-order', data)
  }
}
