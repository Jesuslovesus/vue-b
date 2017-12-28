<template>
  <div class="header-wrap">
    <div class="left">

    </div>
    <div class="right">

    </div>

    <div class="screen-full-icon">
      <screenfull></screenfull>
    </div>

  </div>
</template>

<script>
import screenfull from '../../../components/screenfull/index'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    screenfull
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
@import '../../../assets/style/color.less';
.header-wrap {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  background-color: @blue-dark;
  .screen-full-icon {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -15px;
    color: @white;
    overflow: hidden;
  }
}
</style>
