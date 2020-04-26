export default {
  state: {
    menuList: [], // 菜单列表
    curMenu: null // 点击选中的菜单
  },
  mutations: {
    /**
     *
     * @param {*} state
     * @param {*} selectedMenu 点击选中的菜单
     */
    getSelectedMenu(state, selectedMenu) {
      state.curMenu = selectedMenu
    }
  },
  actions: {}
}
