<template>
  <div id="app">
    <p v-if="hours < 12">Good Morning, {{ greetee }}!</p>
    <p v-if="hours >= 12 && hours < 18">Good Afternoon, {{ greetee }}!</p>
    <p v-if="hours >= 18">Good Evening, {{ greetee }}!</p>
    <p v-if="path === '/'">You're on the home page!</p>
    <p v-else>You're on {{ path }}</p>
    <p>The second dog in the list is {{ dogs[1] }}.</p>
    <p>All the dogs are {{ dogs }}</p> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hours: new Date().getHours(),
      greetee: 'Preston',
      path: location.pathname,
      dogs: ['Radar', 'Casper', 'Lila']
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
