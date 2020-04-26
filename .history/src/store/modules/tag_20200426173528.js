export default {
  state: {
    isCollapse: false, // 是否折叠菜单 默认展开
    menuList: [], // 菜单列表
    curMenu: null, // 点击选中的菜单
    tagList: [
      // 首页是不可关闭的
      {
        path: '/',
        name: 'home',
        title: '首页',
        icon: 'el-icon-s-home'
      }
    ] // 存放tags 点击后 就存到里面去
  },
  mutations: {
    /**
     * 将选中的menu赋值 给curMenu
     * @param {*} state
     * @param {*} selectedMenu 点击选中的菜单
     */
    getSelectedMenu(state, selectedMenu) {
      if (selectedMenu.name !== 'home') {
        state.curMenu = selectedMenu
        let result = state.tagList.findIndex(
          item => item.name === selectedMenu.name
        )
        if (result === -1) {
          // 没找到这个tag 就放进tagList
          state.tagList.push(selectedMenu)
        }
      } else {
        state.curMenu = null
      }
    },
    /**
     * 关闭已经打开的菜单
     * @param {*} state
     * @param {*} selectedTag 打开的菜单
     */
    closeSelectedTag(state, selectedTag) {
      let result = state.tagList.findIndex(
        item => item.name === selectedTag.name
      )
      state.tagList.splice(result, 1)
      // 关闭了之后 跳转到前面一个菜单 页面
    },
    // 关闭 或 展开左侧菜单栏
    collapseAsideMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
