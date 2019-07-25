<template>
  <b-modal ref="category-modal" id="category-modal" hide-footer :title="props.title">
    <b-form @submit="handleSubmit" class="favourite-form">
      <b-form-group label="Name" label-for="groupName">
        <b-form-input
          v-model="props.defaultVal"
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
  props: ["props"],
  methods: {
    hideModal() {
      this.$refs["category-modal"].hide();
    },
    async handleSubmit(e) {
      e.preventDefault();
      const { defaultVal, id } = this.props;
      const submitError = await this.props.submitFunc({ name: defaultVal, id });
      if (!submitError) this.hideModal();
    }
  }
};
</script>
