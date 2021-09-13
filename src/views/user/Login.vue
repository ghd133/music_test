<!--
 * @Author: your name
 * @Date: 2021-09-05 11:02:17
 * @LastEditTime: 2021-09-12 23:08:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\user\logo.vue
-->
<template>
  <div class="userCon">
    <div class="userinfo" @click="open">
      <el-avatar :size="30" :src="userinfo.avatarUrl" />
      <span class="show_username">{{ userinfo.name }}</span>
    </div>
    <login-form
      :loginboxshow="loginboxshow"
      @closeFormbox="closeFormbox"
    ></login-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LoginForm from './LoginForm.vue'
export default {
  components: { LoginForm },

  created() {
    this.changeinfo()

    if (!this.isLogin) {
      this.$message({
        message: '登录过期或未登录！',
        type: 'warning'
      })
      this.open()
    }
  },
  updated() {
    this.changeinfo()
  },
  data() {
    return {
      loginboxshow: false,
      userinfo: {
        name: '点击登录',
        avatarUrl: require('@/assets/logo.png')
      }
    }
  },
  computed: {
    ...mapState(['isLogin']),
    ...mapState('user', ['profile'])
  },
  methods: {
    //关闭登录弹窗
    handleClose() {
      this.loginboxshow = false
      this.changeinfo()
    },

    //打开登录弹窗
    open() {
      this.loginboxshow = true
    },
    closeFormbox() {
      this.handleClose()
    },
    changeinfo() {
      if (this.isLogin) {
        this.userinfo.name = this.profile.nickname
        this.userinfo.avatarUrl = this.profile.avatarUrl
      }
    }
  }
}
</script>

<style lang="less" scoped>
.userCon {
  position: relative;
}
.userinfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  cursor: pointer;
  height: 60px;
  flex-wrap: nowrap;
  .el-avatar {
    display: block;
  }
  .show_username {
    width: 70px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 10px;
  }
}

.loginbox {
  display: none;
  width: 100vw;
  height: 100vh;
  position: absolute;
}
</style>
