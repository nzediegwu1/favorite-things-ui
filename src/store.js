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
      id: null,
      category: null
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
    metadata: { items: [], favourite: {} },
    singleCategory: {
      id: null,
      name: "",
      count: 0,
      favourites: []
    },
    formMetadata: [],
    auditLog: {}
  },
  mutations: {
    setCategoryModalState(state, payload) {
      state.categoryModal = payload;
    },
    setAuditLog(state, payload) {
      state.auditLog = payload;
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
      const count = category.count + 1;
      categories.splice(categories.indexOf(category), 1, {
        ...category,
        count
      });
    },
    updateCategory(state, payload) {
      const index = state.categories.findIndex(item => item.id === payload.id);
      state.categories.splice(index, 1, payload);
    },
    deleteCategory(state, { id }) {
      state.categories = state.categories.filter(item => item.id !== id);
    },
    deleteFavourite({ singleCategory, categories }, { id, category }) {
      singleCategory.favourites = singleCategory.favourites.filter(
        item => item.id !== id
      );
      if (category) {
        const categoryAffected = categories.find(({ id }) => id === category);
        const count = categoryAffected.count - 1;
        categories.splice(categories.indexOf(categoryAffected), 1, {
          ...categoryAffected,
          count
        });
      }
    },
    setSingleCategory(state, payload) {
      state.singleCategory = payload;
    },
    setMetadata(state, payload) {
      state.metadata = {
        items: payload.metadata,
        favourite: { id: payload.id, title: payload.title }
      };
    },
    formMetadata(state, payload) {
      state.formMetadata = payload;
    }
  },
  actions: {}
});
