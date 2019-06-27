<template>
  <div class="container">
    <div class="text-center">
      <ContentHeader :goback="gotoFavourites" :headerText="'Audit logs'"></ContentHeader>
      <b-table id="log-table" outlined responsive striped hover :fields="fields" :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import ContentHeader from "../components/ContentHeader";
export default {
  components: { ContentHeader },
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
