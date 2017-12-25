<template>
  <div class="index-page">
    <!-- 顶部导航 -->
    <header class="header-top">
      <header-top></header-top>
    </header>
    <!-- 顶部菜单 -->

    <!-- 中间内容 -->
  </div>
</template>

<script>
import { HeaderTop } from './components'

export default {
  name: '',
  data() {
    return {}
  },
  components: {
    HeaderTop
  },
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
@import '../../assets/style/index.less';
.index-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  .header-top {
    position: absolute;
    top: 0;
    left: 0;
    height: @header-top-index;
    width: 100%;
  }
}
</style>
