import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  getters: {
    lists (state) {
      return state.lists
    }
  },
  mutations: {
    'SET_LISTS' (state, lists) {
      const data = {
        name : lists.text
      }
      state.lists.splice(lists.index,1,data);
    }
  },
  actions: {
    ActionLists ({commit},list) {
      commit('SET_LISTS', list);
  }
  },
  modules: {
  }
})
