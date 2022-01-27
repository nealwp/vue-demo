<template>
  <div id="app">
    <p v-if="hours < 12">Good Morning, {{ greetee }}!</p>
    <p v-if="hours >= 12 && hours < 18">Good Afternoon, {{ greetee }}!</p>
    <p v-if="hours >= 18">Good Evening, {{ greetee }}!</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hours: new Date().getHours(),
      greetee: 'Preston'
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
