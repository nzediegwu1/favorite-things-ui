<template>
  <div>
    <b-modal ref="add-favourite" hide-footer id="add-favourite" title="Add Favourite">
      <div>
        <b-form class="favourite-form" @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Title" label-for="input-1">
            <b-form-input
              id="title"
              v-model="form.title"
              type="text"
              required
              placeholder="Enter title of your favourite"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Description" label-for="input-2">
            <b-form-textarea
              id="description"
              v-model="form.description"
              placeholder="Describe your favourite"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group id="input-group-3" label="Rank" label-for="input-3">
            <b-form-input id="rank" v-model="form.rank" type="number" required></b-form-input>
          </b-form-group>
          <!-- new attribute goes here -->
          <div v-for="attribute in Array(form.attributes)" :key="attribute">
            <AttributeObject :dropdownList="form.options"></AttributeObject>
          </div>

          <b-form-group id="input-group-5" label-for="input-5">
            <b-button @click="addAttribute" class="add-attr-btn" variant="primary">
              <i class="fa fa-plus"></i>
              Add attribute
            </b-button>
          </b-form-group>

          <div class="form-buttons">
            <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
            <b-button type="submit" class="btn-favourite">Submit</b-button>
          </div>
        </b-form>
      </div>
    </b-modal>
    <b-modal id="add-group" title="Add Group">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="add-attribute" title="Add Attribute">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="view-attributes" title="View Attributes">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="edit-favourite" title="Edit Favourite">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="delete-favourite" title="Delete Favourite">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
import AttributeObject from "./AttributeObject";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        rank: null,
        options: [
          { value: null, text: "Please select an option" },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
          { value: { C: "3PO" }, text: "This is an option with object value" },
          { value: "d", text: "This one is disabled", disabled: true }
        ],
        attributes: 0
      }
    };
  },
  components: {
    AttributeObject
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    hideModal() {
      this.$refs["add-favourite"].hide();
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.title = "";
      this.form.description = "";
      this.form.rank = null;
    },
    addAttribute() {
      this.form.attributes++;
    }
  }
};
</script>
