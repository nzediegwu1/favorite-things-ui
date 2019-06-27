<template>
  <div class="container">
    <div class="text-center">
      <b-container class="bv-example-row">
        <b-row class="log-control">
          <b-col cols="5">
            <b-button @click="gotoFavourites" variant="outline-primary">
              <i class="fa fa-arrow-left"></i> Back
            </b-button>
          </b-col>
          <b-col cols="7">
            <b class="favourite-tag">Audit Logs</b>
          </b-col>
        </b-row>
      </b-container>
      <b-table id="log-table" outlined responsive striped hover :fields="fields" :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoFavourites() {
      this.$router.push("/favourites");
    }
  },
  data() {
    return {
      items: [
        {
          action: "create",
          createdAt: "15th June, 2019",
          old: "old",
          new: "new"
        },
        {
          action: "update",
          createdAt: "15th June, 2019",
          old: "old",
          new: "new"
        },
        {
          action: "delete",
          createdAt: "15th June, 2019",
          old: "old",
          new: "new"
        },
        {
          action: "update",
          createdAt: "15th June, 2019",
          old: "old",
          new: "new"
        }
      ],
      fields: [
        {
          key: "action",
          sortable: true
        },
        {
          key: "createdAt"
        },
        {
          key: "old"
        },
        {
          key: "new"
        }
      ]
    };
  }
};
</script>
