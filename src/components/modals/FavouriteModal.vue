<template>
  <b-modal ref="favourite-modal" hide-footer id="favourite-modal" :title="props.modalTitle">
    <b-form class="favourite-form" @submit="onSubmit">
      <b-form-group>
        <div class="row">
          <label class="col-3" for="title">Title</label>
          <b-form-input
            id="title"
            class="col-9"
            v-model="props.title"
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
            v-model="props.description"
            placeholder="Describe your favourite"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
      </b-form-group>
      <b-form-group>
        <div class="row">
          <label class="col-3" for="rank">Rank</label>
          <b-form-input class="col-9" id="rank" v-model="props.ranking" type="number" required></b-form-input>
        </div>
      </b-form-group>
      <b-form-group>
        <div class="row">
          <label class="col-3" for="rank">Group</label>
          <b-form-select class="col-9" v-model="props.category" :options="props.categoryList"></b-form-select>
        </div>
      </b-form-group>
      <b-form-group class="metadata-title">
        <label for="metadata">Metadata</label>
      </b-form-group>
      <HandleMetadata
        :content="{items:[]}"
        :removeMetadata="removeMetadata"
        :addMetadata="addMetadata"
      ></HandleMetadata>
      <div class="form-buttons">
        <b-button class="cancel-form" variant="primary" type="reset" @click="hideModal">Cancel</b-button>
        <b-button type="submit" class="btn-favourite">Submit</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
import HandleMetadata from "../HandleMetadata";
import { metadataSchema, validateOption } from "../../schemas";
import { handleErrors } from "../../helpers";

export default {
  components: { HandleMetadata },
  props: ["props"],
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    hideModal() {
      this.$refs["favourite-modal"].hide();
    },
    removeMetadata(items, { id }) {
      items.splice(id, 1);
    },
    async addMetadata(items, name, selected, value) {
      try {
        const newMetadata = {
          name,
          data_type: selected,
          value
        };
        await metadataSchema.validate(newMetadata, validateOption);
        items.push(newMetadata);
      } catch (error) {
        handleErrors(error);
      }
    }
  }
};
</script>
