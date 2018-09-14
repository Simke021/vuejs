new Vue({
  el: "#vue-app",
  data: {
    age: 33
  },
  methods: {
    logName: function() {
      console.log("you entered your name");
    },
    logAge: function() {
      console.log("you entered your age");
    }
  }
});
