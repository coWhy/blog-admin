<template>
  <div class="login-wrap">
    <el-form
      :model="form"
      class="login-form"
      label-position="top"
      label-width="80px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="login">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      let res = await this.$http.post('/user/login', this.form)
      console.log(res)
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  /* 弹性布局 */
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  background-color: #fff;
  width: 300px;
  padding: 30px;
  /* 圆角 */
  border-radius: 5px;
}
.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
