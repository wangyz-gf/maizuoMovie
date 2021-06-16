<template>
  <div>
    <van-index-bar :index-list="computedCityList" @select="handleSelect">
        <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleChangePage(item.name,item.cityId)"/>
        </div>
    </van-index-bar>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from "vue";
import { IndexBar, IndexAnchor,Cell, Toast } from "vant";
import {mapMutations} from 'vuex'

Vue.use(IndexBar);
Vue.use(IndexAnchor).use(Cell);

export default {
    data(){
        return{
            cityList:[]
        }
    },
    computed:{
        computedCityList(){
            return this.cityList.map(item=>item.type)
        }
    },
    mounted(){
        http({
            url:`/gateway?k=5619478`,
            headers:{
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            // console.log(res);
            this.cityList=this.handleCityDatga(res.data.data.cities)
            console.log(this.cityList);
        })
    },
    methods:{
        ...mapMutations('CityModule',['changeCityName','changeCityId']),
        handleCityDatga(cities){
            let letterArr=[]
            let newCities=[]
            for(let code=65;code<91;code++){
                letterArr.push(String.fromCharCode(code))
            }
            letterArr.forEach((letter)=>{
                let list=cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()===letter)
                // console.log(list);
                if(list.length>0){
                    newCities.push({
                        type:letter,
                        list:list
                    })
                }
            })
            // console.log(newCities);
            return newCities
        },
        handleSelect(index){
            Toast(index)
        },
        handleChangePage(cityName,cityId){
            // this.$store.state.cityName=cityName
            // this.$store.commit('changeCityName',cityName)
            // this.$store.commit('changeCityId',cityId)
            this.changeCityName(cityName)
            this.changeCityId(cityId)
            this.$router.back()
        },
    }
};
</script>