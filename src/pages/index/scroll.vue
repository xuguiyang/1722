<template>
  <div class="scroll-con">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ul>
  </div>
</template>

<script>
// better scroll
import BScroll from '@better-scroll/core'
export default {
  name: 'inedx-scroll',
  props: {
    //  是否开启横向滚动
    scrollX: {
      type: Boolean,
      default: false
    }
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
    this.scroll = new BScroll('.scroll-con')
  },
  created () {

  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>
  .scroll-con
    overflow-y scroll
    height 1rem
    background-color #f0f0f0
</style>
