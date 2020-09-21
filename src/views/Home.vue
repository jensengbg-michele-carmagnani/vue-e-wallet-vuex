<template>
  <div id="home">
    <Top />
    <h4>Active card</h4>
    <Card class="card"/>
    <CardStack />
    <button @click="goTo">ADD CARD</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top";
import CardStack from "@/components/CardStack";
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },

  computed: {},
  methods: {
    cleanInfoCard() {
      return this.$store.dispatch("cleanInfocard");
    },
   
    goTo() {
      this.cleanInfoCard();
      this.$router.push("/AddCard");
    },
    showCard(value) {
      return (this.cardData = value);
    },
  },
};
</script>
<style lang="scss">
body {
  display: flex;
}
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 400px;
  min-height: 800px;
  .card{
    margin-bottom: 14rem;
  }
  .addNewCard {
    color: black;
    background: white;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 18px;
    margin-bottom: 10%;
  }
  .addCard {
    margin-top: top 1.2rem;
    width: 280px;
    height: 45px;
    color: white;
    background: black;
    border: 2px solid brown;
    border-radius: 7px;
    font-size: 18px;
    margin-bottom: 1, 2rem;
  }
}
</style>
