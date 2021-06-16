<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
        >
            <van-cell v-for="data in datalist" :key="data.id" @click="handleClick(data.filmId)">
                <img :src="data.poster"/>
                <h3>{{data.name}}</h3>
                <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    主演：{{data.actors | actorFilter}}
                </p>
                <p>{{data.nation}}|{{data.runtime}}</p>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { List,Cell } from 'vant';
import {mapState} from 'vuex'
 
Vue.use(List).use(Cell);


Vue.filter('actorFilter',(actors)=>{
    if(actors===undefined) return '暂无主演'
    return actors.map(item=>item.name).join(' ')
})
export default {
    data(){
        return{
            datalist:[],
            loading: false,
            finished: false,
            current:1,
            total:0,
        }
    },
    computed:{
        ...mapState('CityModule',['cityId'])
    },
    mounted(){
        axios({
                url:`https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=1838388`,
                // url:`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=1838388`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615711504577114755563521","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                // console.log(res.data.data.films);
                this.datalist=res.data.data.films
                this.total=res.data.data.total
            })
    },
    methods:{
        handleClick(id){
            // 1.路径
            // this.$router.push(`/detail/${id}`)
            // 2.路由名字
            // this.$router.push({
            //     name:'kerwinDetail',
            //     params:{
            //         myid:id
            //     }
            // })
            // 3.query方式跳转详情
            this.$router.push(`/detail?id=${id}`)
        },
        onLoad() {
            console.log('到底了');
            if(this.datalist.length===this.total&&this.datalist.length!==0){
                this.finished=true
                return
            }
            this.current++
            axios({
                url:`https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=1838388`,
                // url:`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=1838388`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615711504577114755563521","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                // console.log(res.data.data.films);
                // this.datalist=res.data.data.films
                this.datalist=[...this.datalist,...res.data.data.films]//分页数据添加到后面
                this.loading=false
            })
        },
    }
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
li{
    overflow: hidden;
    padding: 10px;
    text-align: left;
}
img{
    float: left;
    width: 100px;
}
</style>