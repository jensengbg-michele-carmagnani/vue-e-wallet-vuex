<template>
  <section id="cardStack">
    <Card
      v-for="(card, ind) in infoCardsStack"
      :key="ind"
      :style="{ zindex: 12, marginTop: '-12.2rem' }"
    />
  </section>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "cardStack",
  components: {
    Card,
  },

  methods: {},
  computed: {
    infoCardsStack() {
      return this.$store.getters.infoCardsStack;
    },
  },
};
</script>


<style lang="scss">
#cardsStack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 13rem;
}
</style>
