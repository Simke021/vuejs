// var data = {
// name: "Superman"
// };

Vue.component("greeting", {
  template:
    '<p>Hey there, i am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  data: function() {
    return {
      name: "Luigi"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Mario ;)";
    }
  }
});

new Vue({
  el: "#vue-app-one"
});

new Vue({
  el: "#vue-app-two"
});
