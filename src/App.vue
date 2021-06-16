<template>
  <div id="app">
      <!-- <tabbar v-show="$store.state.isTabbarShow"></tabbar> -->
      <tabbar v-show="isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    Tabbar
  },
  computed:{
    ...mapState('TabbarModule',['isTabbarShow'])
  },
  mounted(){
    // 1
    // axios.get('http://www.mei.com/appapi/panicbuying/intro?timestamp=1621514606466&summary=6489dad320dca16ff101eeafa42bbb6e')
    // .then(res=>{
    //   console.log(JSON.stringify(res));
    // })
    // 2
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=16C599A0B96B11EBB461F34618D93D658608A31BC7344A098F9A9DB4BDE11525&optimus_risk_level=71&optimus_code=10')
    // .then(res=>{
    //   console.log(JSON.stringify(res));
    // })
    // 3
    // axios({
    //   url:'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1838388',
    //   headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615711504577114755563521","bc":"310100"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   }
    // }).then(res=>{
    //   console.log(res);
    // })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
*{
  /* 300ms延迟 */
  touch-action: manipulation;
}
ul,li{
  list-style: none;
}
*{
    padding: 0;
    margin: 0;
}
section{
  margin-bottom: 50px;
}
</style>
