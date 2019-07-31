<template>
  <div class="container">
    <div class="text-center">
      <ContentHeader :goback="gotoFavourites" :headerText="auditLog.message"></ContentHeader>
      <b-table
        id="log-table"
        outlined
        responsive
        striped
        hover
        :fields="fields"
        :items="auditLog.data"
        v-if="auditLog.data.length"
      >
        <template
          slot="date"
          slot-scope="data"
          v-html="data"
        >{{new Date(data.item.date).toLocaleString('en-US')}}</template>
        <template slot="before" slot-scope="data" v-html="data">
          <div @click="toast('my-toast', 'warning', data.item, 'Before')">
            <i class="fa fa-toggle-left"></i>
          </div>
        </template>
        <template slot="after" slot-scope="data" v-html="data">
          <div @click="toast('my-toast', 'success', data.item, 'After')">
            <i class="fa fa-toggle-right"></i>
          </div>
        </template>
      </b-table>
      <div v-else>
        <b-jumbotron
          header="No record found"
          lead="This resources was created before audit log was implemented!"
        ></b-jumbotron>
      </div>
      <b-toast toaster="b-toaster-top-center" id="my-toast" :variant="variant" solid>
        <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
          <strong
            class="mr-auto"
          >{{`${period}-${item.action}: ${new Date(item.date).toLocaleString('en-US')}`}}</strong>
        </div>
        <div v-if="Object.keys(item[dataPeriod] || {}).length === 0" class="text-center">No content</div>
        <b-list-group
          v-else
          :key="value"
          v-for="[key, value] of Object.entries(item[dataPeriod] || {})"
        >
          <b-list-group-item v-if="!excluded.includes(key)" class="row">
            <p class="col-4">{{key.charAt(0).toUpperCase() + key.slice(1)}}</p>|
            <p class="col-7">{{value}}</p>
          </b-list-group-item>
        </b-list-group>
      </b-toast>
    </div>
  </div>
</template>

<script>
import ContentHeader from "../components/ContentHeader";
import { client, handleErrors } from "../helpers";

export default {
  mounted() {
    client
      .get(this.$route.path)
      .then(({ data }) => {
        this.$store.commit("setAuditLog", data);
      })
      .catch(error => handleErrors(error));
  },
  components: { ContentHeader },
  computed: {
    auditLog() {
      return this.$store.state.auditLog;
    },
    dataPeriod() {
      return this.period === "Before" ? "before" : "after";
    }
  },
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
      excluded: ["id", "created_date", "modified_date"],
      fields: [
        {
          key: "action",
          sortable: true
        },
        {
          key: "date",
          sortable: true
        },
        {
          key: "before"
        },
        {
          key: "after"
        }
      ]
    };
  }
};
</script>
