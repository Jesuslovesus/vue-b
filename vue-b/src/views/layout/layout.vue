<template>
  <div class="app-wrapper">
    <!-- 三个布局，上，左，内容 -->
    <header class="header-top">
      <header-top></header-top>
    </header>

    <nav class="left-nav">

    </nav>

    <article class="con-wrap">
      <app-main></app-main>
    </article>

    <footer class="footer">

    </footer>
  </div>
</template>

<script>
import { AppMain, HeaderTop } from './index'

export default {
  name: 'layout',
  components: {
    AppMain,
    HeaderTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/style/color.less';
@import '../../assets/style/index.less';

.app-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: @header-top;
  .header-top {
    position: absolute;
    top: 0;
    left: 0;
    height: @header-top;
    width: 100%;
  }
  .left-nav {
    width: @left-nav-z;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: @blue-dark;
  }
}
</style>
