const datos = Vue.createApp({
    data() {
      return {
        newCatName: "",
        newCatAge: "",
        cats: []
      };
    },
    methods: {
      addCat() {
        this.cats.push({
          name: this.newCatName,
          age: this.newCatAge
        });
        this.newCatName = "";
        this.newCatAge = "";
      },
    },
  });
  
  datos.mount("#app");
  
    