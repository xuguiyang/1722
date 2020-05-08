<template>
  <div class="slide-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="slide-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'IndexSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  created () {

  }
}
</script>

<style lang="stylus" scoped>
.slide-container
  overflow: hidden
  height 0
  padding-bottom 55%
  .slide-img
    width 100%
.swiper-pagination >>> .swiper-pagination-bullet-active
  background-color $bgColor
</style>
