<!--
 * @Author: your name
 * @Date: 2021-09-07 23:35:26
 * @LastEditTime: 2021-09-13 12:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\right_nav\recommend.vue
-->

<template>
  <!-- 推荐 -->
  <div class="recommend">
    <h1 class="tit">推荐</h1>

    <!-- 今日推荐 -->
    <div class="today">
      <h2>
        Hi
        <span>{{ profile.nickname }}</span>
        今日为你推荐
      </h2>
      <div class="slist">
        <song-list-item
          hover
          :datalist="item"
          v-for="(item, index) in slist"
          :key="index"
          width="180px"
          :playCount='false'
        >
          <!-- 播放量 -->
          <template v-slot:mark>
            <div class="playcount">
              <i class="fa fa-music"></i>{{ playCountFormat(item.playcount) }}
            </div>
          </template>

          <!-- 歌单标题 -->
          <template v-slot:tit>
            <div class="songsName">{{ item.name }}</div>
          </template>
        </song-list-item>
      </div>
    </div>
    <!-- 今日推荐结束 -->
  </div>
</template>

<script>
import SongListItem from '@/components/SongListItem.vue'
import songlist from '@/api/songlist/recommend_songlist.js'
import userdetail from '@/api/user/userDetail.js'
import ax from '@/network/request.js'
import { mapState } from 'vuex'
export default {
  components: { SongListItem },

  data() {
    return {
      bannerlist: [],
      slist: []
    }
  },

  computed: {
    ...mapState('user', ['cookie', 'profile']),
  },

  created() {
    this.getrecommend_songlist()
  },

  methods: {
    async getrecommend_songlist() {
      let res = await songlist(this.cookie)
      this.slist = res.recommend
    }
  }
}
</script>

<style lang="less" scoped>
.recommend {
  // background-color: salmon;
  padding-top: 20px;
  padding-left: 20px;
  .tit {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .today {
    // background-color: blue;
    h2 {
      margin-bottom: 20px;
      font-weight: normal;
    }
    .slist {
      display: flex;
      flex-wrap: wrap;
      min-width: 1200px;
      justify-content: flex-start;
      /deep/ .listCon {
        margin-bottom: 30px;
        margin-right: 30px;

        &:hover .playcount {
          display: none;
        }
      }

      .songsName {
        margin-top: 5px;
        width: 100%;
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: bold;
      }
    }
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
</style>
