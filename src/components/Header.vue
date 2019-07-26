<template>
  <div class="header-container">
    <b-navbar fixed="top" toggleable="sm" type="dark" variant="info">
      <b-navbar-brand @click="gotoHome" href="#">
        <b-button variant="outline-primary">FT</b-button>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-button
              v-b-modal.favourite-modal
              @click="setFavouriteModalState"
              class="nav-btn"
              variant="outline-primary"
            >
              <i class="fa fa-plus"></i>
              {{ " " }}
              <i class="fa fa-heart"></i>
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button
              @click="setCategoryModalState"
              v-b-modal.category-modal
              class="nav-btn"
              variant="outline-primary"
            >
              <i class="fa fa-plus"></i> Group
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input placeholder="favourite thing" class="mr-sm-2"></b-form-input>
            <b-dropdown variant="outline-primary" split text="Search" class="m-2">
              <b-dropdown-item href="#">Friends</b-dropdown-item>
              <b-dropdown-item href="#">Movies</b-dropdown-item>
              <b-dropdown-item href="#">Books</b-dropdown-item>
              <b-dropdown-item href="#">Food</b-dropdown-item>
            </b-dropdown>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <FavouriteModal :props="favouriteModalProps"></FavouriteModal>
    <CategoryModal :props="categoryModalProps"></CategoryModal>
    <DeleteModal :props="deleteModalProps"></DeleteModal>
  </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";
import FavouriteModal from "./modals/FavouriteModal";
import CategoryModal from "./modals/CategoryModal";
import DeleteModal from "../components/modals/DeleteModal";
import { categorySchema, favouriteSchema, validateOption } from "../schemas";
import { handleErrors } from "../helpers";

axios.defaults.baseURL = "http://localhost:8000";
export default {
  mounted() {
    axios("/categories")
      .then(({ data }) => {
        this.$store.commit("setCategories", data);
      })
      .catch(error => handleErrors(error));
  },
  computed: {
    categoryModalProps() {
      return this.$store.state.categoryModal;
    },
    deleteModalProps() {
      return this.$store.state.deleteModal;
    },
    favouriteModalProps() {
      return this.$store.state.favouriteModal;
    },
    getCategoryList() {
      return this.$store.state.categories.map(item => ({
        value: item.id,
        text: item.name
      }));
    }
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    setCategoryModalState() {
      this.$store.commit("setCategoryModalState", {
        modalTitle: "Create category",
        handleSubmit: this.createCategory,
        name: "",
        id: null
      });
    },
    async addFavourite(newFavourite) {
      try {
        await favouriteSchema.validate(newFavourite, validateOption);
        await axios.post("/favourites", newFavourite);
        this.$store.commit("addFavourite", newFavourite);
        axios.get(`/categories/${newFavourite.category}`).then(({ data }) => {
          this.$store.commit("setSingleCategory", data);
        });
        toastr.success(`Successfully added favourite: ${newFavourite.title}`);
      } catch (error) {
        return handleErrors(error);
      }
    },
    setFavouriteModalState() {
      this.$store.commit("setFavouriteModalState", {
        modalTitle: "Add Favourite",
        title: "",
        description: "",
        ranking: null,
        category: this.getCategoryList[0].value,
        categoryList: this.getCategoryList,
        handleSubmit: this.addFavourite
      });
      this.$store.commit("formMetadata", []);
    },
    async createCategory({ name }) {
      try {
        await categorySchema.validate({ name }, validateOption);
        const { data } = await axios.post("/categories", { name });
        this.$store.commit("addCategory", data);
        toastr.success(`Successfully created category: ${data.name}`);
      } catch (error) {
        return handleErrors(error);
      }
    }
  },
  components: {
    FavouriteModal,
    CategoryModal,
    DeleteModal
  }
};
</script>
