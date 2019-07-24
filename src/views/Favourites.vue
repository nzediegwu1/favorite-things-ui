<template>
  <div class="custom-container">
    <div class="text-center">
      <ContentHeader
        :goback="gotoHome"
        :headerText="`Favourite ${singleCategory.name.toLowerCase()}`"
      ></ContentHeader>
    </div>
    <b-table
      id="favourites-table"
      outlined
      responsive
      striped
      hover
      :fields="fields"
      :items="favouriteList"
      v-if="favouriteList.length"
    >
      <template slot="metadata" slot-scope="data" v-html="data">
        <b-button class="btn-metadata" v-b-modal.view-metadata>
          <i class="fa fa-info-circle"></i>
        </b-button>
      </template>
      <template slot="title" slot-scope="data">
        <p v-b-popover.hover.bottom="data.item.title">{{generateContent(data.item.title, 17)}}</p>
      </template>

      <template slot="description" slot-scope="data">
        <p
          v-b-popover.hover.bottom="data.item.description"
        >{{generateContent(data.item.description, 23)}}</p>
      </template>

      <template slot="logs" slot-scope="data" v-html="data">
        <b-button class="btn-metadata" @click="gotoAuditLogs">
          <i class="fa fa-book"></i>
        </b-button>
      </template>

      <template slot="manage" slot-scope="data" v-html="data">
        <b-dropdown dropright text variant="primary">
          <b-dropdown-item
            @click="setFavouriteModalState"
            v-b-modal.favourite-modal
            href="#"
            class="edit-favourite"
          >
            <i class="fa fa-edit">&nbsp; Edit</i>
          </b-dropdown-item>
          <b-dropdown-item @click="setDeleteModalState" v-b-modal.delete-modal href="#">
            <i class="fa fa-trash">&nbsp; Delete</i>
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <div v-else>
      <b-jumbotron
        header="No favourite found"
        lead="You have not added any favourite to this category"
      ></b-jumbotron>
    </div>
    <ViewMetadata></ViewMetadata>
  </div>
</template>

<script>
import axios from "axios";
import ViewMetadata from "../components/modals/ViewMetadata";
import ContentHeader from "../components/ContentHeader";

axios.defaults.baseURL = "http://localhost:8000";

export default {
  mounted() {
    axios.get(`/categories/${this.$route.params.id}`).then(({ data }) => {
      this.$store.commit("setSingleCategory", data);
    });
  },
  computed: {
    singleCategory() {
      return this.$store.state.singleCategory;
    },
    favouriteList() {
      return this.singleCategory.favourites;
    }
  },
  components: {
    ViewMetadata,
    ContentHeader
  },
  data() {
    return {
      fields: [
        {
          key: "ranking",
          sortable: true
        },
        {
          key: "title",
          sortable: true
        },
        {
          key: "description"
        },
        {
          key: "logs"
        },
        {
          key: "metadata"
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
        title: "Delete Favourite"
      });
    },
    setFavouriteModalState() {
      this.$store.commit("setFavouriteModalState", {
        title: "Edit Favourite"
      });
    },
    gotoAuditLogs() {
      this.$router.push(`/favourites/${1}/logs`);
    },
    gotoHome() {
      this.$router.push("/");
    },
    generateContent(item, length) {
      return item.length <= length ? item : `${item.slice(0, length)}...`;
    }
  }
};
</script>
