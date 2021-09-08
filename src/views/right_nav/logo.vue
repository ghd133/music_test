<!--
 * @Author: your name
 * @Date: 2021-09-03 10:49:05
 * @LastEditTime: 2021-09-06 09:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\right_nav\logo.vue
-->
<template>
  <div class="logow">
    <span class="logo">
      <img src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000" alt="" />
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.logow {
  background-color: rgb(179,192,209);
  height: 60px;
  line-height: 60px;
  z-index: 99999;
  text-align: center;
  .name {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
}
.logo {
  width: 150px;
  display: inline-block;
  img {
    width: 100%;
    position: relative;
    top: 9px;
  }
}
</style>
