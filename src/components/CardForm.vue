<template>
  <section id="cardForm">
    <article class="form">
      <label>Card Number</label>
      <input
        type="text"
        v-model.number="cardInfo.cardNumber"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        minlength="16"
        placeholder="xxxx xxxx xxxx xxxx"
      />
    </article>
    <article class="form">
      <span>CardHolder name</span>
      <input type="text" v-model="cardInfo.name" placeholder="name & surname" />
    </article>
    <article class="form valid-ccv">
      <aside class="valid">
        <span>Valid Truh</span>
        <input
          type="text"
          v-model="cardInfo.valid"
          maxlength="5"
          placeholder="xx/xx"
        />
      </aside>
      <aside class="ccv">
        <span>CCV</span>
        <input
          type="text"
          v-model.number="cardInfo.ccv"
          onkeypress="return event.charCode >= 48 && event.charCode <= 57 "
          maxlength="3"
          placeholder="xxx"
        />
      </aside>
    </article>
    <article class="form">
      <span>Vendor</span>
      <select class="vendor" v-model="cardInfo.vendor">
        <option value="bitcoin">BITCOIN</option>
        <option value="ninja">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORPORATION</option>
      </select>
    </article>
    <button class="addCard" @click="goBack">ADD CARD</button>
  </section>
</template>

<script>
export default {
  name: "cardForm",
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: "",
      },

      // stackCardArray: [],
    };
  },
  computed: {},
  methods: {
    addCardInfo() {
      this.$store.commit("addInfo", this.cardInfo);
    },
    // addStackCardArray() {
    //   this.stackCard.push(this.cardInfo);
    // },
    addArrayStoreStack() {
      this.$store.commit("addArrayStoreStack", this.cardInfo);
    },

    goBack() {
      this.addCardInfo();
      // this.addStackCard();
      this.addArrayStoreStack();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
#cardForm {
  width: 300px;
  input,
  .vendor {
    width: 100%;
    padding: 7px;
    border: 1px solid rgba(0, 0, 0, 0.376);
    box-sizing: border-box;
    border-radius: 5px;
  }
  .form {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .valid-ccv {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input {
      width: 100px;
    }
    .valid {
      display: flex;
      justify-content: first start;
      flex-direction: column;
    }
    .ccv {
      display: flex;
      justify-content: first start;
      flex-direction: column;
    }
  }
  .addCard {
    width: 280px;
    height: 45px;
    color: white;
    background: black;
    border: 2px solid brown;
    border-radius: 7px;
    font-size: 18px;
    margin: 1.3rem 0;
  }
}
</style>
