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
    countUp: function () {
      this.count++
    },
  },
}
</script>
