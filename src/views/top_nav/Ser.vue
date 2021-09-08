<!--
 * @Author: your name
 * @Date: 2021-09-04 22:10:07
 * @LastEditTime: 2021-09-05 10:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\top_nav\ser.vue
-->
<template>
  <div class="serCon">
    <div>
      <el-input
        :prefix-icon="el_icon"
        v-model="input"
        :placeholder="tip"
        @focus="show"
        @blur="hide"
        size="small"
      >
        <i slot="suffix" class="el-input__icon el-icon-search" ref="serbtn"></i>
      </el-input>
    </div>
    <div class="len">
      <i class="fa fa-podcast"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      el_icon: 'el-icon-search',
      tip: '搜索音乐',
      flag: true
    }
  },
  methods: {
    show() {
      this.tip = ''
      if (this.input === '') {
        this.el_icon = ''
      }
      this.$refs.serbtn.style.display = 'inline'
    },
    hide() {
      if (this.input === '') {
        this.tip = '搜索音乐'
        this.el_icon = 'el-icon-search'
        this.$refs.serbtn.style.display = 'none'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.serCon{
  display: flex;
}
.el-input {
  width: 200px;
  border-radius: 40px;
  i {
    display: none;
    &:hover {
      color: greenyellow;
    }
  }
  /deep/ input {
    border-radius: 40px;
    background-color: rgb(226, 227, 228);
  }
  /deep/ .el-input__suffix {
    right: 20px;
    cursor: pointer;
  }
}
.len {
  margin-left: 10px;
  color: rgb(226, 227, 228);
  cursor: pointer;
  font-size: 20px;
  line-height: 60px;
  display: inline-block;
  &:hover {
    color: rgb(30,207,157);
  }
}
</style>
