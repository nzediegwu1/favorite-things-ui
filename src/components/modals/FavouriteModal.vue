<template>
  <b-modal ref="favourite-modal" hide-footer id="favourite-modal" :title="title">
    <b-form class="favourite-form" @submit="onSubmit" @reset="onReset">
      <b-form-group>
        <div class="row">
          <label class="col-3" for="title">Title</label>
          <b-form-input
            id="title"
            class="col-9"
            v-model="form.title"
            type="text"
            required
            placeholder="Title of your favourite"
          ></b-form-input>
        </div>
      </b-form-group>
      <b-form-group>
        <div class="row">
          <label class="col-3" for="description">Desc</label>
          <b-form-textarea
            class="col-9"
            v-model="form.description"
            placeholder="Describe your favourite"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
      </b-form-group>
      <b-form-group>
        <div class="row">
          <label class="col-3" for="rank">Rank</label>
          <b-form-input class="col-9" id="rank" v-model="form.rank" type="number" required></b-form-input>
        </div>
      </b-form-group>
      <b-form-group>
        <div class="row">
          <label class="col-3" for="rank">Cat.</label>
          <b-form-select class="col-9" v-model="form.selected" :options="form.dropdownList"></b-form-select>
        </div>
      </b-form-group>
      <b-form-group class="metadata-title">
        <label for="metadata">Metadata</label>
      </b-form-group>
      <b-form-group id="metadata">
        <AddMetadata :selected="form.defaultType" :dropdownList="form.options"></AddMetadata>
      </b-form-group>
      <div class="form-buttons">
        <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
        <b-button type="submit" class="btn-favourite">Submit</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
import AddMetadata from "../AddMetadata";
export default {
  components: { AddMetadata },
  data() {
    return {
      form: {
        title: "",
        description: "",
        rank: null,
        selected: null,
        defaultType: "text",
        dropdownList: [
          { value: null, text: "Select category" },
          { value: "people", text: "People" },
          { value: "books", text: "Books" },
          { value: "Movies", text: "Movies" },
          { value: "food", text: "Food" }
        ],
        options: [
          { value: "text", text: "Text" },
          { value: "number", text: "Number" },
          { value: "date", text: "Date" },
          { value: "enum", text: "Enum" }
        ]
      }
    };
  },
  props: ["title"],
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
    }
  }
};
</script>
