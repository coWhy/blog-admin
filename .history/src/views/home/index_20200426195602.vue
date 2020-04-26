<template>
  <el-card></el-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 用户信息
      userInfo: {
        username: 'admin', // 用户名
        avatar: require('@/assets/images/user.jpg'), // 用户头像
        access: '超级管理员' // 登录权限
      }
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
}
</style>
