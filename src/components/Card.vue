<template>
  <div id="card" :class="heads">
    <section id="cardTop">
      <img id="darkChip" src="@/assets/chip-dark.svg" alt />
      <img
        class="vendorImg"
        v-if="infoCard.vendor == 'bitcoin'"
        src="@/assets/vendor-bitcoin.svg"
        alt="vendor"
      />
      <img
        class="vendorImg"
        v-if="infoCard.vendor == 'evil'"
        src="@/assets/vendor-evil.svg"
        alt="vendor"
      />
      <img
        class="vendorImg"
        v-if="infoCard.vendor == 'ninjabank'"
        src="@/assets/vendor-ninja.svg"
        alt="vendor"
      />
      <img
        class="vendorImg"
        v-if="infoCard.vendor == 'blockchain'"
        src="@/assets/vendor-blockchain.svg"
        alt="vendor"
      />
    </section>
    <section id="cardCenter">
      <h3>{{ infoCard.cardNumber }}</h3>
    </section>
    <section id="cardBottom">
      <p>CARDHOLDER NAME</p>
      <p>VALID THRU</p>
    </section>
    <section id="cardBottomInfo">
      <h4>{{ infoCard.name }}</h4>
      <p>{{ infoCard.valid }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "card",

  data() {
    return {};
  },
  methods: {
    // showActiveCard() {
    //   this.$emit("carddata", this.cardData);
    // },
  },
  computed: {
    // infoCard() {
    //   return this.cardData;
    // },
    infoCard() {
      return this.$store.getters.infoCard;
    },
    heads() {
      let vendorClass = "";
      if (this.infoCard.vendor === "bitcoin") {
        vendorClass = "bitCoin";
      }
      if (this.infoCard.vendor === "blockchain") {
        vendorClass = "blockChain";
      }
      if (this.infoCard.vendor === "evil") {
        vendorClass = "evil";
      }
      if (this.infoCard.vendor === "ninja") {
        vendorClass = "ninja";
      }
      return vendorClass;
    },
  },
};
</script>

<style lang="scss">
#card {
  width: 300px;
  height: 180px;
  border: solid 1px gray;
  border-radius: 5px;
  background: rgba(160, 159, 159, 0.158);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 4rem;
  &.bitCoin {
    background-color: #ffae34;
  }
  &.blockChain {
    background-color: #8b58f9;
  }
  &.evil {
    background-color: #f33355;
  }
  &.ninja {
    background-color: #222222;
    color: white;
  }
}
#cardTop,
#cardBottom,
#cardBottomInfo {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}
#darkChip {
  width: 50px;
  height: 40px;
  margin-left: 0.5rem;
}
.vendorImg {
  margin-top: 0.2rem;
  margin-right: 0.5rem;
}
#cardCenter {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

p {
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: white;
}
h4 {
  padding: 0;
  margin: 0;
}
</style>
