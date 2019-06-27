<template>
  <b-modal id="view-metadata" ref="view-metadata" hide-footer title="Metadata">
    <b-table outlined responsive striped hover :fields="fields" :items="items"></b-table>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
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
        }
      ]
    };
  }
};
</script>
