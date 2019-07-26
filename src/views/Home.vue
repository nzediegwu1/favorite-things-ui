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
              <b-card-img
                :src="
                  `https://source.unsplash.com/random/600x600/?${category.name}`
                "
                top
              ></b-card-img>
            </router-link>
            <div class="manage-groups">
              <router-link :to="`/categories/${category.id}`">
                <b-button size="sm" variant="outline-primary">{{ category.count }} Favourites</b-button>
              </router-link>
              <b-button class="logs" size="sm" href="#" variant="primary" @click="gotoAuditLogs">
                <i class="fa fa-book"></i>
              </b-button>
              <b-button
                @click="
                  () =>
                    setCategoryModalState({
                      id: category.id,
                      name: category.name
                    })
                "
                v-b-modal.category-modal
                size="sm"
                href="#"
                variant="primary"
              >
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button
                @click="() => setDeleteModalState(category.name, category.id)"
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
import toastr from "toastr";
import { categorySchema, validateOption } from "../schemas";
import { handleErrors } from "../helpers";

axios.defaults.baseURL = "http://localhost:8000";

export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  },
  methods: {
    setCategoryModalState({ name, id }) {
      this.$store.commit("setCategoryModalState", {
        modalTitle: "Edit category",
        name,
        handleSubmit: this.updateCategoery,
        id: id
      });
    },
    gotoAuditLogs() {
      this.$router.push(`/favourites/${1}/logs`);
    },
    async updateCategoery({ name, id }) {
      try {
        await categorySchema.validate({ name }, validateOption);
        const { data } = await axios.put(`/categories/${id}`, { name });
        this.$store.commit("updateCategory", data);
        toastr.success(`Successfully updated category: ${data.name}`);
      } catch (error) {
        return handleErrors(error);
      }
    },
    async deleteCategory(name, id) {
      try {
        await axios.delete(`/categories/${id}`);
        this.$store.commit("deleteCategory", { id });
        toastr.success(`Successfully deleted: ${name}`, "Category");
      } catch (error) {
        return handleErrors(error);
      }
    },
    setDeleteModalState(name, id) {
      this.$store.commit("setDeleteModalState", {
        modalTitle: "Delete category",
        name,
        id,
        handleDelete: this.deleteCategory
      });
    }
  }
};
</script>
