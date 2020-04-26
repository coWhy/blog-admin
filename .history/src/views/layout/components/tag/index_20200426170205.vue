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
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.title }}
    </el-tag>
  </div>
</template>
