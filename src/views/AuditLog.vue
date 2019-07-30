<template>
  <div class="container">
    <div class="text-center">
      <ContentHeader :goback="gotoFavourites" :headerText="'Audit logs'"></ContentHeader>
      <b-table id="log-table" outlined responsive striped hover :fields="fields" :items="items">
        <template slot="old" slot-scope="data" v-html="data">
          <div @click="toast('my-toast', 'warning', data.item, 'Before')">
            <i class="fa fa-toggle-left"></i>
          </div>
        </template>
        <template slot="new" slot-scope="data" v-html="data">
          <div @click="toast('my-toast', 'success', data.item, 'After')">
            <i class="fa fa-toggle-right"></i>
          </div>
        </template>
      </b-table>
      <b-toast toaster="b-toaster-top-center" id="my-toast" :variant="variant" solid>
        <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">{{`${period}-${item.action}: ${item.date}`}}</strong>
        </div>
        <div v-if="content">
          <b-list-group :key="value" v-for="[key, value] of Object.entries(content)">
            <b-list-group-item class="row">
              <p class="col-4">{{key}}</p>|
              <p class="col-7">{{value}}</p>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div class="text-center" v-else>No value</div>
      </b-toast>
    </div>
  </div>
</template>

<script>
import ContentHeader from "../components/ContentHeader";
export default {
  components: { ContentHeader },
  methods: {
    gotoFavourites() {
      this.$router.go(-1);
    },
    toast(toast, variant, item, period) {
      this.period = period;
      this.item = item;
      this.variant = variant;
      this.$bvToast.show(toast);
    }
  },
  data() {
    return {
      period: "",
      item: {},
      variant: "",
      content2: null,
      content: {
        Title: "Egusi soup",
        Description: "Best soup in Nigeria",
        Ranking: 2,
        Category: "food"
      },
      items: [
        {
          action: "create",
          date: "15th June, 2019"
        },
        {
          action: "update",
          date: "15th June, 2019"
        },
        {
          action: "delete",
          date: "15th June, 2019"
        },
        {
          action: "update",
          date: "15th June, 2019"
        }
      ],
      fields: [
        {
          key: "action",
          sortable: true
        },
        {
          key: "date"
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
