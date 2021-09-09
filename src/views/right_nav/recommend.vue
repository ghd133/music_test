<!--
 * @Author: your name
 * @Date: 2021-09-07 23:35:26
 * @LastEditTime: 2021-09-09 10:52:41
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
        ></song-list-item>
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
    ...mapState('user', ['cookie', 'profile'])
  },

  created() {
    // ax.get('/banner', {
    //   params: {
    //     cookie: this.cookie
    //   }
    // }).then(res => {
    //   if (res.code === 200) {
    //     this.bannerlist = res.banners
    //   }
    // })
    this.getrecommend_songlist()
  },

  methods: {
    async getrecommend_songlist() {
      let res = await songlist(this.cookie)
      this.slist = _.chunk(res.recommend, 4)
    }
  }
}
</script>

<style lang="less" scoped>
.recommend {
  // background-color: salmon;
  overflow: hidden;
  .tit {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .today {
    h2 {
      margin-bottom: 20px;
      font-weight: normal;
    }
    .slist {
      display: flex;
      justify-content: space-between;
      min-width: 1200px;
    }
  }
}
</style>
