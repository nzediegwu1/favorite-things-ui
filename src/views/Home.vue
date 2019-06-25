<template>
  <div class="home-container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Movies" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://source.unsplash.com/random/600x600/?movie" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link to="/favourite-list">
                <b-button size="sm" variant="outline-primary">32 Favourites</b-button>
              </router-link>
              <b-button
                @click="setCategoryModalState"
                v-b-modal.category-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button v-b-modal.delete-modal size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Friends" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://source.unsplash.com/random/600x600/?friend" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link to="/favourite-list">
                <b-button size="sm" variant="outline-primary">26 Favourites</b-button>
              </router-link>
              <b-button
                @click="setCategoryModalState"
                v-b-modal.category-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button v-b-modal.delete-modal size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Books" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://source.unsplash.com/random/600x600/?book" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link to="/favourite-list">
                <b-button size="sm" variant="outline-primary">35 Favourites</b-button>
              </router-link>
              <b-button
                @click="setCategoryModalState"
                v-b-modal.category-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button v-b-modal.delete-modal size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Dishes" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://source.unsplash.com/random/600x600/?food" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link to="/favourite-list">
                <b-button size="sm" variant="outline-primary">41 Favourites</b-button>
              </router-link>
              <b-button
                @click="setCategoryModalState"
                v-b-modal.category-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button v-b-modal.delete-modal size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <DeleteModal :deleteModalTitle="deleteModalTitle"></DeleteModal>
  </div>
</template>
<script>
import DeleteModal from "../components/modals/DeleteModal";

export default {
  data() {
    return {
      deleteModalTitle: "Delete Category",
      categoryModalTitle: "Edit Category"
    };
  },
  methods: {
    setCategoryModalState() {
      this.$store.commit("setCategoryModalState", {
        title: "Edit category"
      });
    }
  },
  components: {
    DeleteModal
  }
};
</script>
