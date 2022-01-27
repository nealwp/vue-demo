<template>
  <div id="app">
    <p v-if="isMorning">Good Morning!</p>
    <p v-if="isAfternoon">Good Afternoon!</p>
    <p v-if="isEvening">Good Evening!</p>
  </div>
</template>

<script>
var hours = new Date().getHours();

export default {
  name: 'App',
  data() {
    return {
      isMorning: hours < 12,
      isAfternoon: hours >= 12 && hours < 18,
      isEvening: hours >= 18
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
