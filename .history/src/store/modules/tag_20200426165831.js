export default {
  state: {
    menuList: [], // 菜单列表
    curMenu: null // 点击选中的菜单
  },
  mutations: {
    /**
     * 将选中的menu赋值 给curMenu
     * @param {*} state
     * @param {*} selectedMenu 点击选中的菜单
     */
    getSelectedMenu(state, selectedMenu) {
      if (selectedMenu.name !== 'home') {
      }
      state.curMenu = selectedMenu
    }
  },
  actions: {}
}
