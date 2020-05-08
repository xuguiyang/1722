<template>
  <div>
    <index-header></index-header>
    <header-swiper :swiperList='swiperInfo'></header-swiper>
  </div>
</template>

<script>
import IndexHeader from './header'
import HeaderSwiper from './homeswiper'
import axios from 'axios'
export default {
  name: 'Index',
  props: {

  },
  components: {
    IndexHeader,
    HeaderSwiper
  },
  data () {
    return {
      swiperInfo: []
    }
  },
  computed: {

  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      console.log(res.data.data.swiperList)
      this.swiperInfo = res.data.data.swiperList
    },
    handleGetDataErr () {
      console.log('err')
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
