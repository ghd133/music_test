<!--
 * @Author: your name
 * @Date: 2021-09-07 23:35:26
 * @LastEditTime: 2021-09-08 21:00:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\src\views\right_nav\recommend.vue
-->

<template>
<!-- 推荐 -->
  <div class="recommend">
    <song-list-item hover></song-list-item>
  </div>
</template>

<script>
import SongListItem from '@/components/SongListItem.vue'
import songlist from '@/api/songlist/recommend_songlist.js'
import userdetail from '@/api/user/userDetail.js'
import { mapState } from 'vuex'
export default {
  components: { SongListItem },

  data() {
    return {
      
    }
  },

  computed: {
    ...mapState('user', ['cookie'])
  },

  created() {
    this.getrecommend_songlist()
  },

  methods: {
    async getrecommend_songlist() {
      let slist = await songlist(this.cookie)
      console.log(slist)
    }
  }
}
</script>

<style></style>
