<template>
<div class="dog-img">
  <button v-if="success" @click="getDog" >Load Another!</button> <br>
  <img class="dog-img" v-if="success" :src="dogImg" :alt="dogImg == null ? 'Loading...' : 'A Cute Dog'">
  <div v-else>LOADING</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dogImg: null,
      success: false
    }
  },
  methods:{
    getDog() {
      this.success = false;
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json()).then(data => {
        this.success = data.status == "success";
        if (this.success) {
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
.dog-img {
  max-height: 500em;
}
</style>