<template>
  <div>
    <index-header></index-header>
    <header-swiper :swiperList='swiperInfo'></header-swiper>
    <index-icons :iconList="iconIfon"></index-icons>
  </div>
</template>

<script>
import IndexHeader from './header'
import HeaderSwiper from './homeswiper'
import IndexIcons from './icons.vue'
import axios from 'axios'
export default {
  name: 'Index',
  props: {

  },
  components: {
    IndexHeader,
    HeaderSwiper,
    IndexIcons
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
      axios.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      this.swiperInfo = res.data.data.swiperList
      this.iconIfon = res.data.data.iconList
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
