<template>
  <header class="header">
    <div class="l-content">
      <!-- 折叠标签 可以折叠左侧菜单栏 折叠：fa fa-outdent 展开： fa fa-indent -->
      <i class="fa fa-indent" aria-hidden="true"></i>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <!-- 默认保留一个 首页 -->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- curMenu 不为null的时候才渲染出来 -->
        <!-- <el-breadcrumb-item :to="curMenu.path" v-if="curMenu">
          {{ curMenu.title }}
        </el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  // width: 380;
  display: flex;
  align-items: center;
  i {
    margin-right: 20px;
  }
  justify-content: space-between;
}
.r-content {
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name {
    display: flex;
    height: 100%;
    color: black;
    font-weight: bolder;
    align-items: center;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #b9d0fb;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff;
      font-weight: bolder;
    }
  }
}
</style>
