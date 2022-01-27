<template>
  <div id="app">
    <p v-if="hours < 12">Good Morning, {{ greetee }}!</p>
    <p v-if="hours >= 12 && hours < 18">Good Afternoon, {{ greetee }}!</p>
    <p v-if="hours >= 18">Good Evening, {{ greetee }}!</p>
    <p v-if="path === '/'">You're on the home page!</p>
    <p v-else>You're on {{ path }}</p>
    <p>The second dog in the list is {{ dogs[1] }}.</p>
    <p>All the dogs are {{ dogs }}</p>
    <hr>
    <div>
      <ul>
        <li v-for="dog in dogs">{{ dog }}</li>
      </ul>
      <ul>
        <li v-for="(rent, city) in averageRent">
          The average rent in {{ city }} is ${{ rent }}
        </li>
      </ul>
    </div>
    <button :disabled="buttonDisabled" v-on:click="addToList()">Test Button</button>
    <p>{{ seconds }} seconds have elapsed since you opened this page.</p>
    <input type="text" v-model="inputText">
    <p>inputText: {{ inputText }}</p>
    <label><input type="radio" v-model="value" value="one">One</label>
    <label><input type="radio" v-model="value" value="two">Two</label>
    <label><input type="radio" v-model="value" value="three">Three</label>
    <p>You selected: {{ value }}.</p>
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
      dogs: ['Radar', 'Casper', 'Lila'],
      averageRent: {
        london: 1650,
        paris: 1730,
        NYC: 3680
      },
      buttonDisabled: false,
      seconds: 0,
      inputText: 'initial value',
      value: 'one',
    }
  },
  methods: {
    addToList() {
      // set to add to a list
      this.$set(this.dogs, 3, 'Arnie')
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
