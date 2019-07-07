<template>
  <div class="home-container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          v-for="category of categories"
          :key="category.id"
          class="col-lg-3 col-md-4 col-sm-6 col-12"
        >
          <b-card :title="category.name" text-variant="white">
            <router-link :to="`/categories/${category.id}`">
              <b-card-img :src="`https://source.unsplash.com/random/600x600/?${category.name}`" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link :to="`/categories/${category.id}`">
                <b-button size="sm" variant="outline-primary">{{category.count}} Favourites</b-button>
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
              <b-button
                @click="setDeleteModalState"
                v-b-modal.delete-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export default {
  mounted() {
    axios("/categories").then(({ data }) => {
      this.$store.commit("setCategories", data);
    });
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  },
  data() {
    return {};
  },
  methods: {
    setCategoryModalState() {
      this.$store.commit("setCategoryModalState", {
        title: "Edit category"
      });
    },
    setDeleteModalState() {
      this.$store.commit("setDeleteModalState", {
        title: "Delete category"
      });
    }
  }
};
</script>
