<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle"; //引入swiper.js
import "swiper/swiper-bundle.css"; //引入swiper.css
export default {
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      autoplay: true,//可选选项，自动滑动
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style scoped>
.swiper-wrapper img {
  width: 100%;
  height: 200px;
}
</style>