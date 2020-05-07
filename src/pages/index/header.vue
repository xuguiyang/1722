<template>
  <div class="header">
    <div class="black">
      <span class="icon iconfont">&#xe63b;</span>
    </div>
    <div class="searech">
      <span class="icon iconfont">&#xe93d;</span>
      请输入搜索内容
    </div>
    <div class="city">
      北京
      <span class="icon iconfont ">&#xe627;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-header',
  props: {

  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  },
  created () {

  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles"
.header
  display flex
  height .88rem
  line-height .88rem
  color #fff
  background-color $bgColor
  .black
    width .58rem
    text-align center
    font-size .4rem
    font-weight 700
    padding 0 .2rem
  .searech
    flex 1
    height  .6rem
    line-height .6rem
    padding-left .2rem
    margin .14rem .2rem
    background-color #fff
    border-radius 0.1rem
    color #ccc
  .city
    padding-right .4rem
</style>
