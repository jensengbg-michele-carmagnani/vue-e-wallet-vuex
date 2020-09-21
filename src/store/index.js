import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeInfo: {
      cardNumber: "",
      name: "",
      valid: "",
      ccv: "",
      vendor: "",
    },
    arrayStoreStack: [],
  },
  mutations: {
    addInfo: (state, cardInfo) => {
      return (state.storeInfo = cardInfo);
    },
    addArrayStoreStack: (state, cardInfo) => {
      return state.arrayStoreStack.push(cardInfo);
    },
    cleanInfocard(state) {
      return (state.storeInfo = "");
    },
  },
  actions: {
    cleanInfocard(context) {
      return context.commit("cleanInfocard");
    },
    // addArrayStoreStack(context, cardInfo) {
    //   return context.commit("addArrayStoreStack", cardInfo);
    // },
    // addInfo(context, { cardInfo }) {
    //   return context.commit("addInfo", cardInfo);
    // },
  },
  getters: {
    infoCard(state) {
      return state.storeInfo;
    },
    infoCardsStack(state) {
      return state.arrayStoreStack;
    },
  },
});
