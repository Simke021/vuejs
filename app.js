new Vue({
  el: "#vue-app",
  data: {
    name: "Aleksandar",
    job: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, consequatur."
  },
  methods: {
    greet: function(time) {
      return "Good" + " " + time + " " + this.name;
    }
  }
});
