<template>
    <div>
        <!-- <div style="height:300px;background:yellow;">轮播</div> -->
        <film-swiper>
            <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
                <img :src="data"/>
            </div>
        </film-swiper>
        <!-- 吸顶效果 -->
        <film-header style="position: sticky;top: 0;background: white;"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
import filmHeader from '@/views/film/FilmHeader'
import filmSwiper from '@/views/film/FilmSwiper'
export default {
    components:{
        filmHeader,filmSwiper
    },
    data(){
        return{
            imgList:[
                'https://pic.maizuo.com/usr/movie/4c4153c2a4c00a055f839adc9b85c551.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/56b8d62c897ee7d632361eb111d6a24d.jpg?x-oss-process=image/quality,Q_70',
                'https://pic.maizuo.com/usr/movie/e36d2d9c7db09e956849e89aebbc5259.jpg?x-oss-process=image/quality,Q_70'
                ],

        }
    }
}
</script>
<style scoped>

</style>>