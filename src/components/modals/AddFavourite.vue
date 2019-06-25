<template>
  <b-modal ref="add-favourite" hide-footer id="add-favourite" title="Add Favourite">
    <b-form class="favourite-form" @submit="onSubmit" @reset="onReset">
      <b-form-group label="Title" label-for="title">
        <b-form-input
          id="title"
          v-model="form.title"
          type="text"
          required
          placeholder="Enter title of your favourite"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Description" label-for="description">
        <b-form-textarea
          id="description"
          v-model="form.description"
          placeholder="Describe your favourite"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Rank" label-for="rank">
        <b-form-input id="rank" v-model="form.rank" type="number" required></b-form-input>
      </b-form-group>
      <!-- new attribute goes here -->
      <div v-for="attribute in Array(form.attributes)" :key="attribute">
        <AttributeObject :selected="form.selected" :dropdownList="form.options"></AttributeObject>
      </div>

      <b-form-group label-for="add-attr-button">
        <b-button id="add-attr-button" @click="addAttribute" class="add-attr-btn" variant="primary">
          <i class="fa fa-plus"></i>
          Add attribute
        </b-button>
      </b-form-group>

      <div class="form-buttons">
        <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
        <b-button type="submit" class="btn-favourite">Submit</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
import AttributeObject from "../AttributeObject";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        rank: null,
        selected: null,
        options: [
          { value: null, text: "Select a value" },
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
