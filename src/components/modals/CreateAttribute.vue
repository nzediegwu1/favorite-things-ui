<template>
  <b-modal hide-footer ref="add-attribute" id="add-attribute" title="Create Attribute">
    <b-form @submit="onSubmit" class="favourite-form">
      <b-form-group label="Name" label-for="attribute-name">
        <b-form-input
          placeholder="Attribute name"
          id="attribute-name"
          aria-label="Name"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Type" label-for="type-dropdown">
        <b-form-select v-model="isSelected" :options="dropdownList" id="type-dropdown"></b-form-select>
      </b-form-group>
      <div class="form-buttons">
        <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
        <b-button type="submit" class="btn-favourite">Create</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  props: ["dropdownList"],
  data() {
    return {
      isSelected: null
    };
  },
  methods: {
    hideModal() {
      this.$refs["add-attribute"].hide();
    },
    onSubmit(evt) {
      evt.preventDefault();
    }
  }
};
</script>
