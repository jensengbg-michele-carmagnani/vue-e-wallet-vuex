<template>
  <main id="addCard">
    <Top />
    <Card :cardData="cardInfo" />
    <CardForm @cardInfo="formInfo" />
  </main>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";

export default {
  name: "addCard",

  components: {
    Top,
    Card,
    CardForm,
  },
  props: {
    cardInfo: Object,
  },

  methods: {
    formInfo(value) {
      this.$emit("cardInfo", value);
    },
  },
};
</script>

<style lang="scss">
body{
  display: flex;
}
#addCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  min-width: 400px;
  min-height: 800px;
}
</style>
