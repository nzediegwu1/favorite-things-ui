import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryModal: {
      title: ""
    },
    deleteModal: {
      title: ""
    },
    favouriteModal: {
      title: ""
    }
  },
  mutations: {
    setCategoryModalState(state, payload) {
      state.categoryModal = payload;
    },
    setDeleteModalState(state, payload) {
      state.deleteModal = payload;
    },
    setFavouriteModalState(state, payload) {
      state.favouriteModal = payload;
    }
  },
  actions: {}
});
