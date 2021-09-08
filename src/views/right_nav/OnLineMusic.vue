<!--
 * @Author: your name
 * @Date: 2021-09-03 11:10:51
 * @LastEditTime: 2021-09-08 00:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\right_nav\OnLineMusic.vue
-->
<template>
  <div class="">
    <div class="tit">{{ navdata.tit }}</div>
    <div class="nav_container">
      <router-link
        :to="item.path"
        class="navitem"
        v-for="(item, index) in navlist"
        :class="{ active: isActive(index) }"
        @click="changeClass(index)"
        :key="item.itemName"
        ><i :class="item.icon"></i>{{ item.itemName }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    // console.log(this.navdata)
  },
  props: {
    navdata: {
      type: Object
    }
  },
  data() {
    return {
      //切换class
      num: null
    }
  },
  computed: {
    ...mapState(['isLogin']),
    navlist() {
      if (!this.isLogin) {
        //未登录状态
        return this.navdata.navList.filter(item => {
          return !item.auth
        })
      } else {
        return this.navdata.navList
      }
    },

    // 动态添加class
    isActive() {
      return index => {
        return index === this.num
      }
    }
  },
  methods: {
    changeClass(index) {
      this.num = index
    }
  }
}
</script>

<style lang="less" scoped>
.tit {
  font-size: 12px;
  text-align: left;
  padding-left: 50px;
  color: #999;
  margin-bottom: 10px;
}
.nav_container {
  text-align: left;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  .router-link-exact-active.router-link-active {
    color: white;
    background-color: rgb(30, 205, 153);
    &:hover {
      background-color: rgb(30, 205, 153);
    }
  }

  .navitem {
    padding-top: 7px;
    padding-bottom: 7px;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    color: black;
    padding-left: 40px;
    margin-top: 6px;
    margin-bottom: 6px;

    div {
      width: 130px;
      margin: 0 auto;
      padding-left: 40px;
    }
    i {
      font-weight: bold;
      font-size: 16px;
      margin-right: 8px;
    }
    &:hover {
      background-color: rgb(192 196 204, 0.8);
    }
  }
}
</style>
