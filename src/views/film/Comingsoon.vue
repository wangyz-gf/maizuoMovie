<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.filmId)">
                <img :src="data.poster"/>
                 <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    主演：{{data.actors | actorFilter}}
                </p>
                <p>{{data.nation}}|{{data.runtime}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import {mapState} from 'vuex'

Vue.filter('actorFilter',(actors)=>{
    if(actors===undefined) return '暂无主演'
    return actors.map(item=>item.name).join(' ')
})
export default {
    data(){
        return{
            datalist:[],

        }
    },
    computed:{
        ...mapState('CityModule',['cityId'])
    },
    mounted(){
        axios({
            url:`https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=2&k=4462855`,
            // url:`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=2&k=4462855`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615711504577114755563521","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            // console.log(res.data.data.films);
            this.datalist=res.data.data.films
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
        }
    }
}
</script>
<style scoped>
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