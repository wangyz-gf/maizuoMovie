import http from "@/util/http";

const module={
    namespaced:true,//命名空间开启
    state:{
        cinemaList:[],  
    },
    mutations:{
        setCinemaList(state,cinemas){
            state.cinemaList=cinemas
        },
        clearCinemaList(state){
            state.cinemaList=[]
        },
    },
    actions:{
        getCinemaList(store,cityId){
            return http({
                url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2071436`,
                headers: {
                  "X-Host": "mall.film-ticket.cinema.list",
                },
              }).then((res) => {
                // console.log(res);
                // this.cinemaList = res.data.data.cinemas;
                store.commit('setCinemaList',res.data.data.cinemas)
              });
        }
    }
}
export default module