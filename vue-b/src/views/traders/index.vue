<template>
  <div class="trader-wrap">
    <div class="header-box">
      <header-top></header-top>
    </div>
    <!-- 交易中 -->
    <div class="center-box">
      <div class="left-wrap">

      </div>
      <!-- 指令 -->
      <div class="center-wrap">
        <div class="center-con-box">
          <div class="center-top">

          </div>
          <div class="center-bottom">

          </div>

        </div>
        <div class="center-right">

        </div>
      </div>
      <!-- 事务 -->
    </div>
    <!-- 已完成 -->
  </div>
</template>

<script>
import { headerTop } from './components'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    headerTop
  },
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
@import '../../assets/style/index.less';
.trader-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red;
  min-height: 300px;

  .header-box {
    position: relative;
    width: 100%;
    height: @header-top-trader;
    background-color: white;
  }
  .center-box {
    position: absolute;
    top: @header-top-trader;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    background-color: #cccccc;
    .left-wrap {
      background-color: white;
      float: left;
      width: 300px;
      height: 100%;
    }
    .center-wrap {
      position: absolute;
      left: 320px;
      top: 10px;
      right: 0;
      bottom: 10px;
      background-color: white;
    }
  }
}
</style>