<template>
  <b-modal ref="category-modal" id="category-modal" hide-footer :title="title">
    <b-form @submit="handleSubmit" class="favourite-form">
      <b-form-group label="Name" label-for="groupName">
        <b-form-input
          v-model="categoryName"
          type="text"
          required
          placeholder="Enter name of the category"
        ></b-form-input>
      </b-form-group>
      <div class="form-buttons">
        <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
        <b-button type="submit" class="btn-favourite">Submit</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  props: ["title", "saveCategory"],
  data() {
    return {
      categoryName: ""
    };
  },
  methods: {
    hideModal() {
      this.$refs["category-modal"].hide();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.saveCategory(this.categoryName);
    }
  }
};
</script>
