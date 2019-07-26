<template>
  <b-form-group id="metadata">
    <div class="row new-metadata">
      <b-form-input v-model="name" placeholder="name" class="col-3" type="text"></b-form-input>
      <b-form-select v-model="selected" class="col-3" :options="options"></b-form-select>
      <b-input-group class="col-5">
        <b-form-input v-model="value" placeholder="value" :type="selected"></b-form-input>
        <b-input-group-append>
          <b-button
            @click="() => addMetadata(items, name, selected, value, content.favourite)"
            class="btn-metadata"
            variant="secondary"
          >
            <i class="fa fa-check"></i>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-table v-if="items.length" outlined responsive striped hover :fields="fields" :items="items">
      <template slot="del" slot-scope="data" v-html="data">
        <b-button
          @click="
            () => removeMetadata(items, { index: data.index, id: data.item.id })
          "
          class="btn-metadata"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <p class="text-center" v-else>No metadata added</p>
  </b-form-group>
</template>
<script>
export default {
  props: ["removeMetadata", "addMetadata", "content"],
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
      items: this.content.items,
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
