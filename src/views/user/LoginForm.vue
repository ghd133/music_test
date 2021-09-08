<!--
 * @Author: your name
 * @Date: 2021-09-06 10:45:38
 * @LastEditTime: 2021-09-08 17:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\user\LoginForm.vue
-->
<template>
  <div class="logininfo">
    <el-dialog
      :visible="loginboxshow"
      :before-close="handleClose"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      modal-append-to-body
      append-to-body
    >
      <!-- 登录方式 -->
      <div class="logintype clearfix">
        <div
          class="qqtype"
          :class="{ active: isActive(0) }"
          @click="logintype(0)"
        >
          QQ登录
        </div>
        <div
          class="weixintype"
          :class="{ active: isActive(1) }"
          @click="logintype(1)"
        >
          微信登录
        </div>
      </div>

      <!-- qq登录 -->
      <div class="qqlogin" v-show="isActive(0)">
        <!-- 二维码登录 -->
        <div class="erqq" v-show="!ruleFormahow">
          <h2 class="tip">快速安全登录</h2>
          <div class="tip">
            请使用<a class="typetip">QQ手机版</a
            >扫描二维码，或点击头像授权登录。
          </div>
          <div class="imgbox">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <!-- 密码登录QQ -->
        <div class="pwqq" v-show="ruleFormahow">
          <div class="tit">
            <h2>账号密码登录</h2>
            <div class="tittip">
              推荐使用<span @click="ruleFormahowchange">手机QQ扫码登录</span
              >，防止盗号
            </div>
          </div>
          <el-form :rules="rules" :model="ruleForm" ref="ruleForm">
            <el-form-item prop="name">
              <el-input
                v-model="ruleForm.phone"
                placeholder="支持QQ号/邮箱/手机号码登录"
              ></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                placeholder="密码"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="login('ruleForm')"
                class="loginbtn"
                id="loginbtn"
                :disabled="btn_disabled"
              >
                <span v-if="!loading">授权并登录</span
                ><span v-else><i class="el-icon-loading"></i>登录中...</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>

        <!-- qq登录导航 -->
        <div class="nav clearfix">
          <div @click="ruleFormahowchange" v-html="ahtml"></div>
          <div>|</div>
          <div><a href="">注册新账号</a></div>
          <div>|</div>
          <div>意见反馈</div>
        </div>
      </div>

      <!-- 微信登录 -->
      <div class="weilogin" v-show="isActive(1)">
        <div class="wxer">
          <img src="" alt="" />
        </div>
        <div class="tip">请使用微信扫描二维码登录QQ音乐</div>
        <div class="tip">QQ微信不互通</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import login from '@/api/user/loginAPI.js'
export default {
  props: ['loginboxshow'],
  data() {
    return {
      num: 0,
      loading: false,
      ahtml: '账号密码登录',

      btn_disabled: false,

      //默认二维码登录
      ruleFormahow: this.loginboxshow,

      ruleForm: {
        phone: '18805694774',
        password: '452932702ghd'
      },
      rules: {
        phone: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 5,
            max: 15,
            message: '长度在 5 到 15 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 5,
            max: 15,
            message: '长度在 5 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    isActive() {
      return v => {
        return this.num == v
      }
    }
  },
  methods: {
    ...mapMutations(['loginState']),
    ...mapMutations('user', ['setToken', 'setAccount', 'setProfile','setCookie']),

    login(formName) {
      //
      //加载图标
      this.loading = true

      //禁用按钮
      this.btn_disabled = true

      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await login(this.ruleForm)
          console.log(res);
          //登录成功
          if (res.code === 200) {
            //关闭加载图标
            this.loading = false

            //关闭登录窗口
            this.$emit('closeFormbox')

            //解禁按钮
            this.btn_disabled = false

            //修改登录状态
            this.loginState(true)

            //保存token
            this.setToken(res.token)

            //保存账户信息
            this.setAccount(res.account)

            //保存用户信息
            this.setProfile(res.profile)

            this.setCookie(res.cookie)

            this.$message({
              message: '登录成功！',
              type: 'success'
            })
          } else if (res.code === 502) {
            this.$message({
              message: '用户名或密码错误！',
              type: 'error'
            })

            //关闭加载图标
            this.loading = false

            //解禁按钮
            this.btn_disabled = false
          }
        }
      })
    },

    //qq切换密码和二维码登录
    ruleFormahowchange(event) {
      this.ahtml =
        '<a href="https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html?v=3.0&old_ver_account=" target="_blank">忘记密码?</a>'
      this.ruleFormahow = !this.ruleFormahow

      //二维码登录界面时，nav显示'账号密码登录'
      if (!this.ruleFormahow) {
        this.ahtml = '账号密码登录'
      }
    },

    //切换QQ微信登录方式
    logintype(num) {
      this.num = num
      if (num === 0) {
        this.reste()
      }
    },

    reste() {
      this.ruleFormahow = true
      this.ahtml = '账号密码登录'
    },

    handleClose(done) {
      this.$emit('closeFormbox')
    }
  }
}
</script>

<style lang="less" scoped>
body {
  .el-dialog__wrapper {
    /deep/ .el-dialog {
      position: absolute;
      height: 450px;
      min-width: 300px;
      max-width: 400px;
      text-align: center;
      margin: auto !important;

      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      /deep/ .el-form {
        .el_button {
          width: 100%;
        }
      }

      .logintype {
        width: 200px;
        margin: 0 auto;
        text-align: center;
        border-radius: 30px;
        background-color: rgb(244, 244, 244);
        margin-bottom: 30px;
        height: 40px;
        line-height: 40px;
        .active {
          background-color: rgb(255, 255, 255);
          color: black;
        }
        div {
          font-size: 20px;
          width: 100px;
          float: left;
          cursor: pointer;
          border-radius: 30px;
          color: rgb(105, 105, 105);
        }
      }

      //qq部分
      .qqlogin {
        //二维码QQ
        .erqq {
          width: 200px;
          margin: 0 auto;
          .tip {
            margin-bottom: 10px;
          }
          .imgbox {
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
            img {
              background-color: chartreuse;
              width: 80px;
              height: 80px;
            }
          }

          .typetip {
            color: blue;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }

        //密码qq
        .pwqq {
          width: 270px;
          margin: 0 auto;
          .tittip {
            margin-top: 10px;
            margin-bottom: 10px;
          }
          #loginbtn {
            span {
              color: white;
            }
          }
          span {
            cursor: pointer;
            color: blue;
          }
        }

        //qq登录导航
        .nav {
          position: absolute;
          bottom: 10px;
          right: 20px;

          display: flex;
          justify-content: flex-end;
          div {
            cursor: pointer;
            font-size: 12px;
            padding: 5px;
            color: rgb(105, 105, 105);
            &:hover {
              text-decoration: underline;
            }
          }
          a {
            color: rgb(105, 105, 105);
          }
        }
      }

      .el-form-item {
        .el-button {
          width: 100%;
        }
      }

      // 微信部分
      .weilogin {
        .wxer {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background-color: chartreuse;
          margin-bottom: 30px;
          img {
            width: 100%;
          }
        }
        .tip {
          margin-top: 20px;
          color: rgb(105, 105, 105);
        }
      }
    }
  }
}
</style>
