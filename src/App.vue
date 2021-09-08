<!--
 * @Author: your name
 * @Date: 2021-09-02 18:09:45
 * @LastEditTime: 2021-09-08 10:37:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloudMusic\src\App.vue
-->

<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home></Home> -->
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>

</style>
