<template>
  <div>
    <p class="demo">
      Hello World <br>
      <button @click="plus(-1)" :disabled="count <= 0">-</button>
      <span>{{count}}</span>
      <button @click="plus(1)" :disabled="count >= 10">+</button>
    </p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {count:0}
  },
  methods: {
    plus(amt) {
      this.count += amt
    }
  }
}
</script>
