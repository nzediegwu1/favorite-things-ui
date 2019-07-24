<template>
  <b-modal id="view-metadata" ref="view-metadata" hide-footer title="Metadata">
    <b-form-group id="metadata">
      <AddMetadata :selected="form.defaultType" :dropdownList="form.options"></AddMetadata>
      <b-table outlined responsive striped hover :fields="fields" :items="items">
        <template slot="del" slot-scope="data" v-html="data">
          <b-button class="btn-metadata">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
    </b-form-group>
  </b-modal>
</template>

<script>
import AddMetadata from "../AddMetadata";

export default {
  components: {
    AddMetadata
  },
  data() {
    return {
      form: {
        options: [
          { value: "text", text: "Text" },
          { value: "number", text: "Number" },
          { value: "date", text: "Date" },
          { value: "enum", text: "Enum" }
        ],
        defaultType: "text"
      },
      items: [
        {
          name: "Color",
          value: "Red"
        },
        {
          name: "Gender",
          value: "Male"
        },
        {
          name: "Weight",
          value: "1.5kg"
        },
        {
          name: "DatePurchased",
          value: "23rd March, 2019"
        }
      ],
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
