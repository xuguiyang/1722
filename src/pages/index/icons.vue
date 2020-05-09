<template>
  <div class="icon-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pageList" :key="index">
        <div class="area-container">
          <div class="area-item" v-for="item in page" :key="item.id">
            <div>
              <img class="ares-img" :src="item.imgUrl" alt="">
              <p class="area-desc">{{item.title}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-icon',
  props: {
    iconList: Array
  },
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.iconList.forEach((val, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(val)
      })
      return pages
    }
  },
  methods: {

  },
  mounted () {
    // setTimeout(() => {
    //   console.log('11')
    //   console.log(this.pageList)
    // }, 3000)
  },
  created () {

  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>
.icon-container
  height 3.8rem
  // background-color red
  overflow hidden
  .area-container
    display flex
    flex-wrap wrap
    .area-item
      height 1.9rem
      width 25%
      .ares-img
        display block
        margin .3rem auto .2rem auto
        width .8rem
        height .8rem
      .area-desc
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin-top .1rem
        text-align center
</style>
