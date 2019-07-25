import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryModal: {
      title: "",
      submitFunc: null,
      defaultVal: "",
      id: null
    },
    deleteModal: {
      title: ""
    },
    favouriteModal: {
      title: ""
    },
    categories: [],
    singleCategory: {
      id: null,
      name: "",
      count: 0,
      favourites: []
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
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    addCategory(state, payload) {
      state.categories.unshift(payload);
    },
    updateCategory(state, payload) {
      const index = state.categories.findIndex(item => item.id === payload.id);
      state.categories.splice(index, 1, payload);
    },
    setSingleCategory(state, payload) {
      state.singleCategory = payload;
    }
  },
  actions: {}
});
