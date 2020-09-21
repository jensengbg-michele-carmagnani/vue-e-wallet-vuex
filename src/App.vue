<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },

      cards: [],
    };
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap");
body {
  width: 100vw;
  height: 100vh;
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  max-height: 900px;
  margin: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
