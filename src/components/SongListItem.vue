<!--
 * @Author: your name
 * @Date: 2021-09-07 23:29:21
 * @LastEditTime: 2021-09-12 20:22:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\components\SongListItem.vue
-->

<template>
  <div
    class="listCon"
    :class="hover ? 'anima' : ''"
    ref="listitem"
    :style="{ width: width }"
  >
    <div class="box">
      <img :src="datalist.picUrl" />
      <i class="icon fa fa-play-circle"></i>
      <slot name="mark"></slot>
    </div>

    <slot name="tit"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    hover: {
      type: Boolean,
      default: true
    },
    datalist: {
      type: Object
    },
    width: {
      type: String,
      default: '300px'
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.listCon {
  width: 200px;
  border-radius: 10px;
  transition: all 0.2s;
  position: relative;
  top: 0;
  cursor: pointer;

  .box {
    width: 100%;
    text-align: center;
    font-size: 16px;
    position: relative;
    top: 0;
    transition: all 0.3s;

    img {
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 10px;
    }

    .icon {
      display: none;
      position: absolute;
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 50px;
      color: white;
      top: 50%;
      right: 50%;
      margin-top: -25px;
      margin-right: -25px;

      &:hover {
        color: rgb(30, 207, 157);
      }
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;
      border-radius: 10px;
    }
  }

  &:hover .box::before {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover .icon {
    display: block;
  }
}
.anima:hover .box {
  top: -5px;
}
.icon-bofang:hover {
  color: aquamarine;
}
</style>
