<template>
  <b-modal ref="favourite-modal" hide-footer id="favourite-modal" :title="title">
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
      <div v-for="metadata in Array(form.metadata)" :key="metadata">
        <MetadataItem :selected="form.selected" :dropdownList="form.options"></MetadataItem>
      </div>

      <b-form-group label-for="add-metadata-button">
        <b-button id="add-metadata-button" @click="addMetadata" class="add-metadata-btn" variant="primary">
          <i class="fa fa-plus"></i>
          Add metadata
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
import MetadataItem from "../MetadataItem";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        rank: null,
        selected: null,
        options: [
          { value: null, text: "Select attribute" },
          { value: "color", text: "Color" },
          { value: "gender", text: "Gender" },
          { value: 'weight', text: "Weight" },
          { value: "date", text: "Date Purchased" }
        ],
        metadata: 0
      }
    };
  },
  props: ["title"],
  components: {
    MetadataItem
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    hideModal() {
      this.$refs["favourite-modal"].hide();
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.title = "";
      this.form.description = "";
      this.form.rank = null;
    },
    addMetadata() {
      this.form.metadata++;
    }
  }
};
</script>
