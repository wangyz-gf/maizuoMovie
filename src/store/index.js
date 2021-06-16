import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http";
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'
import TabbarModule from './module/TabbarModule'


Vue.use(Vuex)
export default new Vuex.Store({
    // 存放公共状态
    state:{

    },
    // 集中式修改状态---被监控
    mutations:{

    },
    // 异步
    actions:{

    },
    // 各个模块组装
    modules:{
        CityModule,
        CinemaModule,
        TabbarModule
    }

    // state:{
    //     cityId:'310100',
    //     cityName:'上海',
    //     isTabbarShow:true,
    //     cinemaList:[],
    // },
    // mutations:{
    //     changeCityName(state,name){
    //         state.cityName=name
    //     },
    //     changeCityId(state,id){
    //         state.cityId=id
    //     },
    //     changeTabbarShow(state,show){
    //         state.isTabbarShow=show
    //     },
    //     setCinemaList(state,cinemas){
    //         state.cinemaList=cinemas
    //     },
    //     clearCinemaList(state){
    //         state.cinemaList=[]
    //     },
    // },
    // actions:{
    //     // getCinemaList(store,cityId){
    //     //     http({
    //     //         url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2071436`,
    //     //         headers: {
    //     //           "X-Host": "mall.film-ticket.cinema.list",
    //     //         },
    //     //       }).then((res) => {
    //     //         // console.log(res);
    //     //         // this.cinemaList = res.data.data.cinemas;
    //     //         store.commit('setCinemaList',res.data.data.cinemas)
    //     //       });
    //     // },
    //     getCinemaList(store,cityId){
    //         return http({
    //             url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2071436`,
    //             headers: {
    //               "X-Host": "mall.film-ticket.cinema.list",
    //             },
    //           }).then((res) => {
    //             // console.log(res);
    //             // this.cinemaList = res.data.data.cinemas;
    //             store.commit('setCinemaList',res.data.data.cinemas)
    //           });
    //     }
    // }
})