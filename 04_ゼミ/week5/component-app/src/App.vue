<template>
  <div class="container">
    <h1>slot Human</h1>
    <div class="slot-example">
      <Human
        ><div>😘</div>
        <div>a</div></Human
      >
      <Human
        ><div>😇</div>
        <div>a</div></Human
      >
      <Human
        ><div>😊</div>
        <div>a</div></Human
      >
    </div>
  </div>
</template>

<script>
import Human from "./components/Human.vue"

export default {
  components: {
    Human,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.slot-example,
.props-example {
  display: flex;
}

a {
  cursor: default;
  color: inherit;
  text-decoration: none;
}
</style>
