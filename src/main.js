// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('positive-numbers', {
  template: '<p>{{ positiveNumbers.length }} positive numbers</p>',
  data() {
    return {
      numbers: [ -5, 0, 2, -1, 1, 0.5]
    };
  },
  computed: {
    positiveNumbers() {
      return this.numbers.filter((number) => number >= 0)
    }
  }
})

Vue.component('color-preview', {
  template: '<div class= "color-preview" :style="style"> this is likely {{ color }}</div>',
  props: ['color'],
  computed: {
    style() {
      return { backgroundColor: this.color }
    }
  }
})

Vue.component('price-display', {
  template: '<div>{{ unit }}{{ finalPrice }}</div>',
  props: {
    price: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      }
    },
    unit: {
      type: String,
      default: '$'
    },
    percentageDiscount: Number
  },
  computed: {
    finalPrice(){
      if (this.percentageDiscount) {
        return this.price * (1 - (this.percentageDiscount/100))
      }
      return this.price
    }
  }
})

Vue.component('display-number', {
  template: '<p>The number is {{ number }}</p>',
  props: {
    number: {
      type: Number,
      required: true
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
