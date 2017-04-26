var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  },
  methods: {
    reverseThis: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.component('list-thing', {
  // Declare a prop here to take as a "parameter" for the component
  props: ['list'],
  // Use templare here for templated html
  template: '<li>Hello {{ list.text }}</li>'
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    randomList: [
      { text: 'Hello' },
      { text: 'World' },
      { text: 'Testing' }
    ]
  }
})

