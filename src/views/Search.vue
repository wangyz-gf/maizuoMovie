<template>
  <div>
    <van-search
      class="search"
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @cancle="handleCanle()"
    />
    <van-list>
      <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
        <div>{{ data.name }}</div>
        <div class="address">{{ data.address }}</div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, List, Cell } from "vant";
import {mapState,mapActions} from 'vuex'

Vue.use(Search).use(List).use(Cell);

export default {
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    if (this.cinemaList.length === 0) {
      // this.$store.dispatch("getCinemaList", this.cityId);
      this.getCinemaList(this.cityId)
    } else {
    }
  },
  computed: {
    ...mapState('CityModule',['cityId']),
    ...mapState('CinemaModule',['cinemaList']),
    computedCinemaList() {
    if (this.value === "") return [];

      return this.cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
      );
    },
  },
  methods:{
    ...mapActions('CinemaModule',['getCinemaList']),
      handleCanle(){
          this.$router.replace('/cinema')
      },
  }
};
</script>
<style scoped>
.search {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  position: sticky;
  top: 0;
  z-index: 999;
}
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