<template>
  <h2>Vueカウンター</h2>
  <div>{{ count }}</div>
  <button v-on:click="countUp">+1</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp() {
      this.count = this.count + 1
    },
  },
}
</script>
