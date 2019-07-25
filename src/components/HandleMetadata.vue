<template>
  <b-form-group id="metadata">
    <div class="row new-metadata">
      <b-form-input v-model="name" placeholder="name" class="col-3" type="text"></b-form-input>
      <b-form-select v-model="selected" class="col-3" :options="options"></b-form-select>
      <b-input-group class="col-5">
        <b-form-input v-model="value" placeholder="value" :type="selected"></b-form-input>
        <b-input-group-append>
          <b-button @click="addItem" class="btn-metadata" variant="secondary">
            <i class="fa fa-check"></i>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-table v-if="items.length" outlined responsive striped hover :fields="fields" :items="items">
      <template slot="del" slot-scope="data" v-html="data">
        <b-button @click="()=>removeMetadata(data.index)" class="btn-metadata">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <p class="text-center" v-else>No metadata added</p>
  </b-form-group>
</template>
<script>
import { metadataSchema, validateOption } from "../schemas";
import { handleErrors } from "../helpers";

export default {
  methods: {
    removeMetadata(id) {
      this.items = this.items.filter((item, index) => index !== id);
    },
    async addItem() {
      try {
        const newMetadata = {
          name: this.name,
          type: this.selected,
          value: this.value
        };
        await metadataSchema.validate(newMetadata, validateOption);
        this.items.push(newMetadata);
      } catch (error) {
        handleErrors(error);
      }
    }
  },
  data() {
    return {
      options: [
        { value: "text", text: "Text" },
        { value: "number", text: "Number" },
        { value: "date", text: "Date" },
        { value: "enum", text: "Enum" }
      ],
      name: "",
      value: "",
      selected: "text",
      items: [],
      fields: [
        {
          key: "name",
          sortable: true
        },
        {
          key: "value",
          sortable: true
        },
        {
          key: "del"
        }
      ]
    };
  }
};
</script>
