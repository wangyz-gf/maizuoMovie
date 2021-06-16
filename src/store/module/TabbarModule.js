const module={
    namespaced:true,//命名空间开启
    state:{
        isTabbarShow:true,
    },
    mutations:{
        changeTabbarShow(state,show){
            state.isTabbarShow=show
        },
    },
    actions:{

    }
}
export default module