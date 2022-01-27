<template>
  <div id="app">
    <p v-if="hours < 12">Good Morning!</p>
    <p v-if="hours >= 12 && hours < 18">Good Afternoon!</p>
    <p v-if="hours >= 18">Good Evening!</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hours: new Date().getHours()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
