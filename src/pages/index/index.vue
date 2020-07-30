<template>
  <div>
    <index-header></index-header>
    <header-swiper :swiperList='swiperInfo'></header-swiper>
    <index-icons :iconList="iconIfon"></index-icons>
    <index-scroll></index-scroll>
    <div @click="go"><button>btn</button></div>
  </div>
</template>

<script>
import IndexHeader from './header'
import HeaderSwiper from './homeswiper'
import IndexIcons from './icons.vue'
import IndexScroll from './scroll'
// import axios from 'axios'
export default {
  name: 'Index',
  props: {

  },
  components: {
    IndexHeader,
    HeaderSwiper,
    IndexIcons,
    IndexScroll
  },
  data () {
    return {
      swiperInfo: [],
      iconIfon: []
    }
  },
  computed: {

  },
  methods: {
    getIndexData () {
      this.$axios.get('/api/index.json')
      // this.$axios.get('../../../static/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      this.swiperInfo = res.data.data.swiperList
      this.iconIfon = res.data.data.iconList
    },
    handleGetDataErr () {
      console.log('err')
    },
    go () {
      this.$router.push('/city/123')
    }
  },
  mounted () {

  },
  created () {
    this.getIndexData()
  },
  watch: {

  }
}
</script>

<style scoped>

</style>
