<template>
    <!-- Swiper -->
  <div class="swiper-container" :class="swiperclass">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'//引入swiper.js
import 'swiper/swiper-bundle.css';//引入swiper.css
export default {
    props:{
        perslide:{
            type:Number,
            default:1
        },
        swiperclass:{
            type:String,
            default:'swiper-container'
        }
    },
    mounted(){
        // console.log(this.perslide);
        new Swiper('.'+this.swiperclass,{
            slidesPerView:this.perslide,
            spaceBetween:10,
            freeMode:true
        });
    }
}
</script>
<style scoped>
.swiper-wrapper img{
    width: 100%;
    height: 200px;
}
</style>