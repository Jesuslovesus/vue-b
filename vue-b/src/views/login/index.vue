<template>
  <div class="login-wrap">
    <div class="con-wrap">
      <div class="con-box">
        <h2>登录</h2>
        <el-input v-model="input" placeholder="账号"></el-input>
        <password-input @passwordChange="passwordChange" :placeholder="passwordPlaceholder"></password-input>
      </div>

    </div>
  </div>
</template>

<script>
import { passwordInput } from './components.js'
export default {
  name: '',
  data() {
    return {
      passwordInput: '',
      passwordPlaceholder: '输入密码'
    }
  },
  components: {
    passwordInput
  },
  mounted() {},
  methods: {
    passwordChange(password) {
      this.passwordChange = password
    }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/style/color.less';
@import '../../assets/style/index.less';
.login-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @background-a;
  .con-wrap {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 100%;
    // background-color: blueviolet;
    .con-box {
      position: absolute;
      top: 30%;
      left: 0;
      width: 100%;
      background-color: aqua;
      h2 {
        text-align: center;
      }
    }
  }
}
</style>
