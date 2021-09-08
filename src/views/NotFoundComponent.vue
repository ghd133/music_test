<!--
 * @Author: your name
 * @Date: 2021-09-08 21:21:21
 * @LastEditTime: 2021-09-08 21:24:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\NotFoundComponent.vue
-->
<template>
  <diV
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-background="rgba(255, 255, 255)"
  >
    <div v-show="!fullscreenLoading" class="err" @click="$router.go(-1)">
      404~ 请求的资源不存在!!!∑(ﾟДﾟノ)ノ，点击返回上一步
    </div>
  </diV>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: true,
    }
  },
  created() {
    setTimeout(() => {
      this.fullscreenLoading = false
    }, 500)
  },
}
</script>

<style lang="less" scoped>
.err {
  color: red;
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  line-height: 100vh;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
}
</style>
