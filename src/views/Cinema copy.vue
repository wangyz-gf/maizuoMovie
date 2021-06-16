<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    <template #left>
        {{cityName}}<van-icon name="arrow-down" color="black"></van-icon>
    </template>
    <template #right>
        <van-icon name="search" size="23" color="black"></van-icon>
    </template>
    </van-nav-bar>
    <div class="cinema" :style="{ height: height } + 'px'">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import http from "@/util/http";
// import BScroll from '@better-scroll/core'
import Vue from "vue";
import { NavBar,Icon } from "vant";
import {mapSpace,mapMutations,mapActions} from 'vuex'
Vue.use(NavBar).use(Icon);

export default {
  data() {
    return {
      height: 0,
    };
  },
  computed:{
    ...mapSpace('CityModule',['cityName','cityId']),
    ...mapSpace('CinemaModule',['cinemaList'])
  },
  mounted() {
    this.height = document.documentElement.scrollHeight - 50;
    if(this.cinemaList.length===0){
      // this.$store.dispatch('getCinemaList',this.$store.state.cityId)
      // this.$store.dispatch('getCinemaList',this.cityId)
      this.getCinemaList(this.cityId)
      .then(res=>{
        console.log(res);
      })
    }else{

    }
  },
  methods: {
    ...mapMutations('CinemaModule',['clearCinemaList']),
    ...mapActions('CinemaModule',['getCinemaList']),
    onClickLeft() {
      // 清空cinemaList
      // this.$store.commit('clearCinemaList')
      this.clearCinemaList()
        this.$router.push('/city')
    },
    onClickRight() {
      // this.$store.commit('clearCinemaList')
      this.clearCinemaList()
      this.$router.push('/cinema/search')
    },
  },
};
</script>
<style scoped>
.cinema {
  overflow: hidden;
}
li {
  padding: 5px;
}
.address {
  font-size: 12px;
  columns: gray;
}
</style>