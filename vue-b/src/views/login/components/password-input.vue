<template>
  <div class="p-input-wrap">
    <el-input v-if="passwordShow" type="text" v-model="passwordInput" :placeholder="placeholderValue">
    </el-input>

    <div class="p-hide" v-if="!passwordShow">
      <el-input v-model="passwordInput" type="password" :placeholder="placeholderValue">
      </el-input>
    </div>
    <!-- 显示隐藏 -->
    <i :class="[{'click-see': passwordShow,'click-hide': !passwordShow},'el-icon-view icon-input']" @click="passwordShow = !passwordShow"></i>
  </div>

</template>

<script>
export default {
  props: ['password', 'placeholder'],
  name: 'password-input',
  data() {
    return {
      passwordShow: false,
      passwordClean: false,
      passwordInput: '',
      placeholderValue: ''
    }
  },
  watch: {
    passwordInput: function() {
      this.passwordClean = true
      this.sendPassword()
    }
  },
  components: {},
  mounted() {
    this.placeholderValue = this.placeholder
  },
  methods: {
    sendPassword() {
      this.$emit('passwordChange', this.passwordInput)
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/style/color.less';
@import '../../../assets/style/index.less';
.p-input-wrap {
  position: relative;
  margin-bottom: 30px;
  .icon-input {
    position: absolute;
    top: 13px;
    right: 10px;
    color: @infor;
    cursor: pointer;
  }
  .click-see {
    color: @blue-all;
  }
  .click-hide {
    color: @infor;
  }
}
</style>
