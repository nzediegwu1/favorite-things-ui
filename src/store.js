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
      id: null,
      title: "",
      description: "",
      ranking: null,
      category: null,
      categoryList: [],
      handleSubmit: null
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
    addFavourite({ categories }, payload) {
      const category = categories.find(({ id }) => id === payload.category);
      categories.splice(categories.indexOf(category), 1, {
        ...category,
        count: category.count++
      });
    },
    updateCategory(state, payload) {
      const index = state.categories.findIndex(item => item.id === payload.id);
      state.categories.splice(index, 1, payload);
    },
    deleteCategory(state, { id }) {
      state.categories = state.categories.filter(item => item.id !== id);
    },
    deleteFavourite({ singleCategory }, { id }) {
      singleCategory.favourites = singleCategory.favourites.filter(
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
