<template>
   <div>
      <h1>热门</h1>
      <div class="radiolist">
        <!-- <song-list-item
          hover
          :datalist="item"
          v-for="(item, index) in rlist"
          :key="index"
        ></song-list-item> -->
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
        <p>s</p>
      </div>
   </div>
</template>

<script>
import recommend_radio from '@/api/radio/recommend_radio.js'
import SongListItem from '@/components/SongListItem.vue'
export default {
  components: { SongListItem },
  data() {
    return {
      rlist: [],
    }
  },
  created() {
    recommend_radio().then((data) => {
      console.log(data.result)
      this.rlist = data.result
    })
  },
  mounted() {
  },
}
</script>

<style>

.radiolist {
  margin-top: 10px;
  width: 1279px;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  
}
.radiolist > div {
  margin-bottom: 10px;
}
</style>