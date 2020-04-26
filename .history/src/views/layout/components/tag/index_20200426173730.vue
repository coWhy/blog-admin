<template>
  <div class="tags">
    <!--  tabs标签 
  不是首页才可以关闭
  选中tag颜色变化 :effect="$route.name === tag.name ? 'dark' : 'plain'"
  -->
    <el-tag
      size="small"
      :key="tag.name"
      v-for="tag in tagList"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleCloseSelectedTag(tag)"
      @click="changeSelectedMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.title }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tagList: state => state.tag.tagList
    })
  },
  methods: {
    ...mapMutations({
      closeSelectedTag: 'closeSelectedTag'
    }),
    // 关闭选中的标签
    handleCloseSelectedTag(tag) {
      let result = state.tagList.findIndex(
        item => item.name === selectedTag.name
      )
      this.closeSelectedTag(tag)
    },
    //点击切换 选中菜单 并且跳转页面
    changeSelectedMenu(tag) {
      this.$store.commit('getSelectedMenu', tag)
      this.$router.push({ name: tag.name })
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  background-color: #b5c6d6;
  position: relative;
  height: 42px;
  border: none;
  overflow: hidden;
  padding: 10px;
  .el-tag {
    padding-top: 1px;
    padding-bottom: 1px;
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
