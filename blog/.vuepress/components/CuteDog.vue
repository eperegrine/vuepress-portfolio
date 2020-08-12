<template>
  <img :src="dogImg" :alt="dogImg == null ? 'Loading...' : 'A Cute Dog'">
</template>

<script>
export default {
  data() {
    return {
      dogImg: null
    }
  },
  methods:{
    getDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json()).then(data => {
        if (data.status == "success") {
          this.dogImg = data.message
        }
      })
    }
  },
  beforeMount(){
      this.getDog()
  }
}
</script>

<style>

</style>