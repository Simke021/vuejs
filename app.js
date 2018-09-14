new Vue({
  el: "#vue-app",
  data: {
    name: "Aleksandar",
    job: "Vue ninja :)",
    website: "http://aleksander.napravi.online/",
    websiteTag:
      '<a href="http://aleksander.napravi.online" target="_blank">Aleksandar portfolio</a>'
  },
  methods: {
    greet: function(time) {
      return "Good" + " " + time + " " + this.name;
    }
  }
});
