

new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [
      { title: "Prduct 1" },
      { title: "Prduct 2" },
      { title: "Prduct 3" },
    ]
  },
  methods: {
    addToCart: function () {
      this.total += 9.99
    }
  }
});