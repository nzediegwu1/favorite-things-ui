import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryModal: {
      modalTitle: "",
      handleSubmit: null,
      name: "",
      id: null
    },
    deleteModal: {
      modalTitle: "",
      handleDelete: null,
      name: "",
      id: null
    },
    favouriteModal: {
      modalTitle: "",
      title: "",
      description: "",
      ranking: null,
      category: null,
      categoryList: []
    },
    categories: [],
    metadata: { items: [], favourite: null },
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
    deleteCategory(state, { id }) {
      state.categories = state.categories.filter(item => item.id !== id);
    },
    deleteFavourite(state, { id }) {
      state.singleCategory.favourites = state.singleCategory.favourites.filter(
        item => item.id !== id
      );
    },
    setSingleCategory(state, payload) {
      state.singleCategory = payload;
    },
    setMetadata(state, payload) {
      state.metadata = payload;
    }
  },
  actions: {}
});
