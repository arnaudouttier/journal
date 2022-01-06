import { createStore } from 'vuex'

export default createStore({
  state: {
    activeNav: false,
    activeSidebar: false
  },
  mutations: {
    toleSIdebar (state) {
      state.activeSidebar = !state.activeSidebar
    }
  },
  actions: {
  },
  modules: {
  }
})
