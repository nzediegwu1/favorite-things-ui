<template>
  <div class="container">
    <div class="text-center">
      <b class="favourite-tag">Favourite {{ favouriteItem }}</b>
    </div>
    <b-table id="favourites-table" outlined responsive striped hover :fields="fields" :items="items">
      <template slot="metadata" slot-scope="data" v-html="data">
        <b-button class="btn-metadata" v-b-modal.view-metadata>
          <i class="fa fa-info-circle"></i>
        </b-button>
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
    <Metadata></Metadata>
  </div>
</template>

<script>
import Metadata from "../components/modals/Metadata";
export default {
  components: {
    Metadata,
  },
  data() {
    return {
      items: [
        {
          ranking: 40,
          title: "Dickerson",
          description: "The guy who made me believe in myself"
        },
        {
          ranking: 21,
          title: "Larsen",
          description: "My childhood friend since day 1"
        },
        {
          ranking: 89,
          title: "Victor",
          description: "The software engineer who mentored me in my early days"
        },
        {
          ranking: 38,
          title: "Jami",
          description: "My gist buddy. Very smart dude"
        }
      ],
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
      ],
      favouriteItem: "Friends"
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
      this.$router.push("/favouriteId/logs");
    }
  }
};
</script>
