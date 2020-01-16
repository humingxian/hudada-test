import user from './modules/user'
const hudadaTest = {
  namespaced: true,
  state: {},
  mutations: {},
  // 嵌套模块
  modules: {
    hudadaTestUser: user
  }
}

export default hudadaTest
