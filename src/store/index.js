import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
import hudadaTest from './main'
// vuex 数据持久化插件,利用vuex提供的钩子去执行setStorage
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    storeCount: 10
  },
  mutations: {
    increment (state) {
      state.storeCount++
    }
  },
  modules: {
    hudadaTest
  },
  plugins: [createPersistedState({
    key: 'hudada-test-vuex',
    storage: window.sessionStorage,
    reducer (state) {
      // console.log('store', state)
      return state
    }
  })]
})

export default store
