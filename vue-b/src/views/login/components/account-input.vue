<template>
  <div class="p-input-wrap">
    <el-input type="text" v-model="accountInput" :placeholder="placeholderValue">
    </el-input>

    <!-- 删除 -->
    <i class="el-icon-circle-close icon-input" v-if="accountClean" @click="accountCleans"></i>
  </div>

</template>

<script>
export default {
  props: ['account', 'placeholder'],
  name: 'account-input',
  data() {
    return {
      passwordClean: false,
      accountClean: false,
      accountInput: '',
      placeholderValue: ''
    }
  },
  watch: {
    accountInput: function() {
      if (this.accountInput != '') {
        this.accountClean = true
      }
      this.sendaAccount()
    }
  },
  components: {},
  mounted() {
    this.placeholderValue = this.placeholder
  },
  methods: {
    sendaAccount() {
      this.$emit('accountChange', this.accountInput)
    },
    accountCleans() {
      this.accountClean = false
      this.accountInput = ''
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
}
</style>
