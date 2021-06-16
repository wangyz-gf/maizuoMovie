<template>
    <div v-if="filminfo">
        <detail-header v-top :title="filminfo.name"></detail-header>
        <div :style="{backgroundImage:'url('+filminfo.poster+')'}"
        style="height:200px;background-size:cover;background-position:center;"></div>
        <h3>{{filminfo.name}}--{{filminfo.filmType.name}}</h3>
        <div>
            {{filminfo.category}}
        </div>
        <div>
            {{filminfo.premiereAt|dateFilter}}上映
        </div>
        <div>
            {{filminfo.nation}}|{{filminfo.runtime}}分钟
        </div>
        <div :class="isShow?'':'synopsis'">
            {{filminfo.synopsis}}
        </div>
        <div style="text-align:center;">
            <i class="iconfont" :class="isShow?'icon-ziyuan':'icon-xia'" @click="isShow=!isShow"></i>
        </div>
        <h3>演职人员</h3>
        <detail-swiper :perslide="3" swiperclass="swiper-actors">
            <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
                <img :src="data.avatarAddress" alt="">
                <div style="text-align:center;">
                    <div>{{data.name}}</div>
                    <div>{{data.role}}</div>
                </div>
            </div>
        </detail-swiper>
        <h3>剧照</h3>
        <detail-swiper :perslide="2" swiperclass="swiper-photos">
            <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
                <img :src="data" alt="" @click="handlsPreview(index)"/>
            </div>
        </detail-swiper>
    </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper'
import detailHeader from './detail/DetailHeader'
import { ImagePreview,Toast } from 'vant';
import {mapMutations} from 'vuex'
// 过滤器
Vue.filter('dateFilter',(date)=>{
    return moment(date*1000).format('YYYY-MM-DD'); 
})
// 定义指令
Vue.directive('top',{
    inserted(el){
        el.style.display='none'
        window.onscroll=()=>{
            if((document.body.scrollTop||document.documentElement.scrollTop)>50){
                el.style.display='block'
            }else{
                el.style.display='none'
            }
        }
    },
    unbind(){
        window.onscroll=null
    }
})
export default {
    components:{detailSwiper,detailHeader},
    data(){
        return{
            filminfo:null,
            isShow:false,
        }
    },
    mounted(){

        // // 1,2
        // console.log(this.$route.params.myid);
        // // 3
        // console.log(this.$route.query.id);

        // console.log(this.$route);
        // console.log(this.$route.params.myid);

        // console.log(this.$route);
        // console.log(this.$route.query.id);

        // Toast.loading({
        //     message: '加载中...',
        //     forbidClick: true,
        //     overlay:true,
        //     loadingType:'spinner',
        //     duration:0
        // });
        // this.$store.commit('changeTabbarShow',false)
        this.changeTabbarShow(false)

        http({
            url:`/gateway?filmId=${this.$route.query.id}&k=5174663`,
            headers:{
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            // console.log(res);
            this.filminfo=res.data.data.film
            // Toast.clear()
        })

    },
    beforeDestroy(){
        // this.$store.commit('changeTabbarShow',true)
        this.changeTabbarShow(true)
    },
    methods:{
        handlsPreview(index){
            ImagePreview({
                images:this.filminfo.photos,
                startPosition:index,
                loop:false,
                closeable:true,
                closeIconPosition:'top-left'
            })
        },
        ...mapMutations('TabbarModule',['changeTabbarShow'])
    }
}
</script>
<style scoped>
.synopsis{
    height: 50px;
    overflow: hidden;
}
</style>