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
            <p class="access">超级管理员</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getUsername, getAvatar } from '@/utils/auth'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 用户信息
      userInfo: {
        username: getUsername(), // 用户名
        avatar: getAvatar() // 用户头像
        //   access: '超级管理员' // 登录权限
      },
      //  看板娘模型更换配置 后缀名字就行 如 live2d-widget-model-koharu 的 koharu
      modelName: 'shizuku'
    }
  },
  computed: {
    ...mapState({
      curMenu: state => state.tag.curMenu
    })
  },
  created() {
    this.mouseScroll()
  },
  mounted() {
    this.initLive2d()
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    initLive2d() {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: `live2d-widget-model-${this.modelName}/assets/`,
          tagMode: false,
          debug: false,
          model: {
            jsonPath: `../live2dw/live2d-widget-model-${this.modelName}/assets/${this.modelName}.model.json`
          },
          display: { position: 'right', width: 240, height: 480 },
          mobile: { show: true },
          log: false
        })
      }, 1000)
    },
    watchScroll(e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      }
    }
  }
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
    &info {
      .name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .access {
        color: #999999;
      }
    }
  }
}
</style>
