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
        <li :key="dog" v-for="dog in dogs">{{ dog }}</li>
      </ul>
      <ul>
        <li :key="(rent, city)" v-for="(rent, city) in averageRent">
          The average rent in {{ city }} is ${{ rent }}
        </li>
      </ul>
    </div>
    <button :disabled="buttonDisabled" @click="addToList()">Test Button</button>
    <p>{{ seconds }} seconds have elapsed since you opened this page.</p>
    <input type="text" v-model="inputText">
    <p>inputText: {{ inputText }}</p>
    <label><input type="radio" v-model="value" value="one">One</label>
    <label><input type="radio" v-model="value" value="two">Two</label>
    <label><input type="radio" v-model="value" value="three">Three</label>
    <p>You selected: {{ value | toUpper }}.</p>
    <hr>
    <p>Current status: {{ statusFromId(status) }}</p>
    <ul>
      <li :key="number" v-for="number in filterPositive(numbers)">{{ number }}</li>
    </ul>
    <p>The sum of the positive numbers is {{ getPositiveNumbersSum() }}</p>
    <p v-blink>Sum of all the numbers is {{ numberTotal }}.</p>
    <input type="number" v-model="inputVal">
    <button @click="addToNumbers()">Add To Numbers</button>
    <button @click="divVisible = !divVisible">Toggle Visibility</button>
     <transition name="fade">
      <div v-if="divVisible">This content is sometimes hidden</div>
     </transition>
     <positive-numbers></positive-numbers>
     <color-preview color="red">this is probably red</color-preview>
     <color-preview color="blue">this is likely blue</color-preview>
     <price-display :price="17"></price-display>
     <price-display :price="100" :percentage-discount="30"></price-display>
     <display-number :number="number"></display-number>
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
      status: 0,
      inputVal: undefined,
      numbers: [-5, 0, 2, -1, 1, 0.5],
      divVisible: false,
      number: 0
    }
  },
  methods: {
    addToList() {
      // set to add to a list
      this.$set(this.dogs, 3, 'Arnie')
    },
    statusFromId(id) {
      const status = ({
        0: 'Asleep',
        1: 'Eating',
        2: 'Learning Vue'
      })[id];

      return status || 'Unknown status: ' + id;
    },
    filterPositive(numbers){
      return numbers.filter((number) => number >= 0);
    },
    getPositiveNumbers() {
      return this.numbers.filter((number) => number >= 0);
    },
    getPositiveNumbersSum() {
      return this.getPositiveNumbers().reduce((sum, val) => sum + val);
    },
    addToNumbers() {
      this.numberTotal += parseInt(this.inputVal);
    }
  },
  computed: {
    // computed prop can be used as an object. Neat!
    numberTotal: {
      get() {
      return this.numbers.reduce((sum, val) => sum + val);
      },
      set(newValue) {
        const oldValue = this.numberTotal;
        const difference = newValue - oldValue
        this.numbers.push(difference)
      }
    }
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    blink: {
      bind(el){
        let isVisible = true;
        setInterval(() => {
          isVisible = !isVisible;
          el.style.visibility = isVisible ? 'visible' : 'hidden';
        }, 500)
      }
    }
  },
  created() {
    setInterval(() => {
      this.number++;
    }, 1000)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
