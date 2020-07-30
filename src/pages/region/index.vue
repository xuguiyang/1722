<template>
    <div>
      <index-header></index-header>
      <div v-for="item in list" :key="item.id">{{item}}</div>
    </div>
</template>

<script>
import IndexHeader from '../index/header'
export default {
  props: {

  },
  components: {
    IndexHeader
  },
  data () {
    return {
      list: []
    }
  },
  computed: {

  },
  methods: {
    getCityInfo () {
      this.$axios.get('api/region.json?id=' + this.$route.params.id)
        .then(this.handleSucc.bind(this))
        .catch(this.handleErr.bind(this))
    },
    handleSucc (res) {
      console.log(res.data.data.list)
      this.list = res.data.data.list
    },
    handleErr () {
      console.log('err')
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.getCityInfo()
  },
  created () {

  },
  watch: {
    '$route' () {
      console.log(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
