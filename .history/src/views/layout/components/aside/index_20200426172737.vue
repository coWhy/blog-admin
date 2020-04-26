<template>
  <!-- 这是没有子级菜单的 
    handleClickMenu(item) 将选中的菜单元素存入store中的menu 用于tab使用
    由于 分两种情况 所以 下面两种 都需要加上handleClickMenu 事件
    v-for="item in noChildrenList" 遍历元素列表
    :index="item.path"  路由相关
    :key="item.title" 索引 避免重复
    -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :background-color="asideSetting.bgColor"
    :text-color="asideSetting.textColor"
    :active-text-color="asideSetting.activeColor"
    :collapse="isCollapse"
  >
    <!-- noChildrenList 开始 -->
    <el-menu-item
      :index="item.path"
      v-for="item in noChildrenList"
      :key="item.title"
      @click="handleClickMenu(item)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
    <!-- noChildrenList 结束 -->

    <!-- hasChildrenList 开始 -->
    <el-submenu :index="item" v-for="item in hasChildrenList" :key="item.title">
      <!-- 一级菜单 -->
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
          :key="subItem.title"
          @click="handleClickMenu(subItem)"
        >
          <i :class="subItem.icon"></i>
          <span slot="title">{{ subItem.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- hasChildrenList 结束 -->
  </el-menu>
</template>
<script>
export default {
  computed: {
    noChildrenList() {
      // asideMenuList 没有 子级菜单 非动态获取
      return this.asideMenuList.filter(item => !item.children)
    },
    hasChildrenList() {
      // asideMenuList 有 子级菜单  非动态获取
      return this.asideMenuList.filter(item => item.children)
    },
    // 取出vuex中的是否折叠isCollapse
    isCollapse() {
      return this.$store.state.tag.isCollapse
    }
  },
  methods: {
    // 选中菜单交给vuex管理
    handleClickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('getSelectedMenu', item)
    }
  },
  data() {
    return {
      // 侧边 菜单栏
      asideSetting: {
        bgColor: '#343746', // 侧边栏背景颜色
        textColor: '#fff', // 默认字体颜色
        activeColor: '#4ffffb' // 选中字体的颜色
      },
      //侧边栏菜单列表 非动态获取
      asideMenuList: [
        {
          path: '/',
          name: 'home',
          title: '首页',
          icon: 'el-icon-s-home'
        },
        {
          path: '/user',
          name: 'user',
          title: '用户管理',
          icon: 'el-icon-user'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  // 菜单占满容器
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
// 折叠样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
