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
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 search-button" type="submit">
              <i class="fa fa-search"></i>
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Filter" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <FavouriteModal :title="favouriteModalTitle"></FavouriteModal>
    <CreateAttribute :dropdownList="attributeList"></CreateAttribute>
    <CategoryModal :title="categoryModalTitle"></CategoryModal>
    <DeleteModal :title="deleteModalTitle"></DeleteModal>
  </div>
</template>

<script>
import FavouriteModal from "./modals/FavouriteModal";
import CreateAttribute from "./modals/CreateAttribute";
import CategoryModal from "./modals/CategoryModal";
import DeleteModal from "../components/modals/DeleteModal";

export default {
  data() {
    return {
      attributeList: ["text", "number", "date", "enum"]
    };
  },
  computed: {
    categoryModalTitle() {
      return this.$store.state.categoryModal.title;
    },
    deleteModalTitle() {
      return this.$store.state.deleteModal.title;
    },
    favouriteModalTitle() {
      return this.$store.state.favouriteModal.title;
    }
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    setCategoryModalState() {
      this.$store.commit({
        type: "setCategoryModalState",
        title: "Create category"
      });
    },
    setFavouriteModalState() {
      this.$store.commit("setFavouriteModalState", {
        title: "Add Favourite"
      });
    }
  },
  components: {
    FavouriteModal,
    CreateAttribute,
    CategoryModal,
    DeleteModal
  }
};
</script>
