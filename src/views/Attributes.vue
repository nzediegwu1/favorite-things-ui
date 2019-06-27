<template>
  <div class="container">
    <div class="text-center">
      <b class="favourite-tag">Attributes</b>
    </div>
    <b-table outlined responsive striped hover :fields="fields" :items="items">
      <template slot="manage" slot-scope="data" v-html="data">
        <b-button @click="setDeleteModalState" v-b-modal.delete-modal variant="outline-primary">
          <i class="fa fa-trash">&nbsp; Delete</i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Color",
          type: "String"
        },
        {
          name: "Gender",
          type: "Enum"
        },
        {
          name: "Weight",
          type: "Number"
        },
        {
          name: "DatePurchased",
          type: "Date"
        }
      ],
      fields: [
        {
          key: "name",
          sortable: true
        },
        {
          key: "type",
          sortable: true
        },
        {
          key: "manage",
          label: "⚙️"
        }
      ]
    };
  },
  methods: {
    setDeleteModalState() {
      this.$store.commit("setDeleteModalState", {
        title: "Delete attribute"
      });
    }
  }
};
</script>
