import { createStore } from 'vuex'
import postsDataList from '../assets/json/posts.json'

export default createStore({
  state: {
    activeNav: false,
    activeSidebar: false,
    posts: postsDataList

  },
  mutations: {
    toggleNavigation (state) {
      state.activeNav = !state.activeNav
    },
    toggleSIdebar (state) {
      state.activeSidebar = !state.activeSidebar
    }
  },
  actions: {
  },
  modules: {
  }
})
