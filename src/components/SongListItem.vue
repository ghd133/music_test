<!--
 * @Author: your name
 * @Date: 2021-09-07 23:29:21
 * @LastEditTime: 2021-09-13 12:16:09
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
      <div class="playcount" v-if="playCount">
        <i class="fa fa-music"></i>{{ playCountFormat(datalist.playcount) }}
      </div>
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
    //鼠标悬浮动画
    hover: {
      type: Boolean,
      default: true
    },

    //数据源
    datalist: {
      type: Object
    },

    //宽度
    width: {
      type: String,
      default: '300px'
    },

    //是否显示播放量
    playCount: {
      type: Boolean,
      default: true
    },

  },
  mounted() {},
  computed: {

    //格式化播放量
    playCountFormat() {
      return function(val) {
        if (val > 0 && val < 10000) {
          val = (val / 1000).toFixed(1) + '千'
        } else if (val >= 10000 && val < 100000000) {
          val = (val / 10000).toFixed(1) + '万'
        } else {
          val = (val / 100000000).toFixed(1) + '亿'
        }
        return val
      }
    }



  },
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

    .playcount {
      color: white;
      background-color: rgba(5, 0, 0, 0.6);
      border-radius: 10px;
      font-size: 12px;
      // display: inline-block;
      width: 70px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      .fa {
        margin-right: 3px;
      }
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
