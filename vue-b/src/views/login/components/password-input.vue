<template>
  <div class="p-input-wrap">
    <el-input v-if="passwordShow" v-model="passwordInput" :placeholder="placeholderValue">
    </el-input>

    <div class="p-hide" v-if="!passwordShow">
      <el-input v-model="passwordInput">

      </el-input>
    </div>
    <!-- 显示隐藏 -->
    <i :class="[{'click-see': passwordShow},'el-icon-view']" @click="passwordShow = !passwordShow" :placeholder="placeholderValue"></i>
  </div>

</template>

<script>
export default {
  props: ['password', 'placeholder'],
  name: 'password-input',
  data() {
    return {
      passwordShow: true,
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
.click-see {
  color: @blue-all;
}
</style>
