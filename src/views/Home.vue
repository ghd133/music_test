<!--
 * @Author: your name
 * @Date: 2021-09-02 18:09:45
 * @LastEditTime: 2021-09-12 23:08:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloudMusic\src\views\Home.vue
-->
<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="right_nav">
          <!-- logo -->
          <Logo></Logo>
          <!-- 导航列表 -->
          <div class="navwrapper" ref="navwrapper">
            <div class="wrapperCom">
              <on-line-music :navdata="OMusic"></on-line-music>
              <on-line-music :navdata="mMusic"></on-line-music>
            </div>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <ser></ser>
          <Login></Login>
        </el-header>
        <el-main>
          <div ref="radiowrapper" class="radiowrapper">
            <div class="radiocontent">
              <router-view></router-view>
            </div>
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Login from '@/views/user/Login.vue'
import Logo from './right_nav/logo.vue'
import OnLineMusic from './right_nav/OnLineMusic.vue'
import Ser from './top_nav/Ser'
export default {
  data() {
    return {
      OMusic: {
        tit: '在线音乐',
        navList: [
          {
            icon: 'fa fa-beer',
            itemName: '推荐',
            path: '/recommend',
            auth: true
          },
          {
            icon: 'fa fa-music',
            itemName: '音乐馆',
            path: '/songsShop'
          },
          {
            icon: 'fa fa-video-camera',
            itemName: '视频',
            path: 'o'
          },
          {
            icon: 'fa fa-instagram',
            itemName: '电台',
            path: '/radio'
          }
        ]
      },
      mMusic: {
        tit: '我的音乐',
        navList: [
          {
            icon: 'fa fa-heart',
            itemName: '我喜欢',
            path: 's',
            auth: true
          },
          {
            icon: 'fa fa-desktop',
            itemName: '本地和下载',
            path: 'k'
          },
          {
            icon: 'fa fa-history',
            itemName: '播放历史',
            path: 'v'
          },
          {
            icon: 'fa fa-list',
            itemName: '试听列表',
            path: 'i'
          },
          {
            icon: 'fa fa-check-square-o',
            itemName: '已购音乐',
            path: 'c',
            auth: true
          }
        ]
      }
    }
  },
  name: 'Home',
  components: {
    Logo,
    OnLineMusic,
    Ser,
    Login
  },
  methods: {
    init() {
      this.$nextTick(function() {
        const bs = new this.BScroll(this.$refs.radiowrapper, {
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          scrollY: true,
          scrollbar: true,
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  mounted() {
    new this.BScroll(this.$refs.navwrapper, {
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      },
      scrollY: true,
      scrollbar: true,
      scrollbar: {
        fade: true
      }
    })

    // this.init()
  }
}
</script>

<style lang="less" scoped>
.home {
  min-width: 800px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  // min-width: 900px;
}

.el-aside {
  color: #333;
  height: 100vh;
  overflow: hidden;

  .navwrapper {
    // background-color: aquamarine;
    margin-top: 20px;
    height: 642px;
    overflow: hidden;
    position: relative;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  width: calc(100%-200px);
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-footer {
  position: fixed;
  width: calc(100% - 100px);
  bottom: 0;
}
.radiowrapper {
  height: 550px;
  overflow: auto;
  position: relative;
  // background-color: red;

  //仅支持谷歌浏览器
  &::-webkit-scrollbar {
    /*滚动条整体样式*/

    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/

    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/

    border-radius: 10px;

    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

    background: #535353;
  }

  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/

    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

    border-radius: 10px;

    background: #ededed;
  }
}
</style>
