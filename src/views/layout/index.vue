<template>
  <el-container class="container">
    <!-- 左侧菜单栏 -->
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <common-header></common-header>
      </el-header>
      <!-- Tab标签 -->
      <common-tag class="tag"></common-tag>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from './components/aside/index'
import CommonHeader from './components/header/index'
import CommonTag from './components/tag/index'
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.header {
  background-color: $header-bg-color; // 头部背景色
  width: 100%;
}
.main {
  padding-top: 0;
}
</style>
