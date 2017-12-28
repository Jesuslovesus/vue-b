<template>
  <div :class="[{'close-left-nav': closeLeftNav, 'close-top-nav': closeTopNav},'app-wrapper']">
    <!--  -->

    <!-- 三个布局，上，左，内容 -->
    <header class="header-top">
      <header-top></header-top>
    </header>

    <nav class="left-nav">

    </nav>

    <article class="con-wrap">
      <router-view></router-view>
      <!-- <app-main></app-main> -->
    </article>

    <footer class="footer">

    </footer>
  </div>
</template>

<script>
import { AppMain, HeaderTop } from './components'

export default {
  name: 'layout',
  data() {
    return {
      closeLeftNav: false,
      closeTopNav: false
    }
  },
  components: {
    AppMain,
    HeaderTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/style/color.less';
@import '../../assets/style/controlCenter.less';

.app-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 0;
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
  .con-wrap {
    position: absolute;
    left: @left-nav-z;
    top: @header-top;
    right: 0;
    bottom: 0;
    background-color: @test;
    transform: all 0.5;
  }
}
.close-left-nav {
  .con-wrap {
    // left: 0px;
  }
}
.close-top-nav {
  .con-wrap {
    // top: 0px;
  }
}
</style>
