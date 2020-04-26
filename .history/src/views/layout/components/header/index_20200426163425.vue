<template>
  <header class="header">
    <div class="l-content"></div>
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
