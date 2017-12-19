<template>
  <div class="login-wrap">
    <div class="con-wrap">
      <div class="con-box">
        <h2>登录</h2>
        <account-input @accountChange="accountChange" :placeholder="accountPlaceholder"></account-input>
        <password-input @passwordChange="passwordChange" :placeholder="passwordPlaceholder"></password-input>
        <p class="login-btn">
          <el-button type="primary" @click="goLogin">登录</el-button>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import { passwordInput, accountInput } from './components.js'
export default {
  name: '',
  data() {
    return {
      passwordInput: '',
      passwordPlaceholder: '输入密码',
      accountInput: '',
      accountPlaceholder: '用户名'
    }
  },
  components: {
    passwordInput,
    accountInput
  },
  mounted() {},
  methods: {
    passwordChange(password) {
      this.passwordInput = password
    },
    accountChange(account) {
      this.accountInput = account
    },
    goLogin() {
      // 验证登录
      this.$router.push({ path: '/' })
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
      // background-color: aqua;
      h2 {
        text-align: center;
      }
      .login-btn {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
