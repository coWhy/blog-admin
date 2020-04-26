<template>
  <el-row class="home">
    <!-- 左侧 -->
    <el-col :span="6">
      <!-- 用户信息描述 -->
      <el-card shadow="hover" style="height:290px">
        <!-- 头像部分 -->
        <div class="user">
          <img :src="userInfo.avatar" />
          <div class="userinfo">
            <p class="name">{{ userInfo.username }}</p>
            <p class="access">{{ userInfo.access }}</p>
          </div>
        </div>
        <!-- 登录后的相关信息描述 如ip 等-->
        <div class="login-info">
          <p>上次登录时间:<span>2020年4月13日</span></p>
          <p>上次登录地点:<span>江苏省常州市金坛区</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
