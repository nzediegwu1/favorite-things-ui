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
      <template slot="title" slot-scope="data">
        <p v-b-popover.hover.bottom="data.item.title">{{ generateContent(data.item.title, 17) }}</p>
      </template>

      <template slot="description" slot-scope="data">
        <p
          v-b-popover.hover.bottom="data.item.description"
        >{{ generateContent(data.item.description, 23) }}</p>
      </template>

      <template slot="logs" slot-scope="data" v-html="data">
        <b-button class="btn-metadata" @click="()=>gotoAuditLogs(data.item.id)">
          <i class="fa fa-book"></i>
        </b-button>
      </template>

      <template slot="metadata" slot-scope="data" v-html="data">
        <b-button
          class="btn-metadata"
          v-b-modal.view-metadata
          @click="() => setMetadata(data.item)"
        >
          <i class="fa fa-info-circle"></i>
        </b-button>
      </template>

      <template slot="manage" slot-scope="data" v-html="data">
        <b-dropdown dropright text variant="primary">
          <b-dropdown-item
            @click="() => setFavouriteModalState(data.item)"
            v-b-modal.favourite-modal
            href="#"
            class="edit-favourite"
          >
            <i class="fa fa-edit">&nbsp; Edit</i>
          </b-dropdown-item>
          <b-dropdown-item
            @click="() => setDeleteModalState(data.item)"
            v-b-modal.delete-modal
            href="#"
          >
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
    <ViewMetadata
      :removeMetadata="removeMetadata"
      :addMetadata="addMetadata"
      :content="metadataContent"
    ></ViewMetadata>
  </div>
</template>

<script>
import toastr from "toastr";
import ViewMetadata from "../components/modals/ViewMetadata";
import ContentHeader from "../components/ContentHeader";
import { metadataSchema, favouriteSchema, validateOption } from "../schemas";
import { handleErrors, client } from "../helpers";


export default {
  mounted() {
    client.get(`/categories/${this.$route.params.id}`).then(({ data }) => {
      this.$store.commit("setSingleCategory", data);
    });
  },
  computed: {
    singleCategory() {
      return this.$store.state.singleCategory;
    },
    metadataContent() {
      return this.$store.state.metadata;
    },
    favouriteList() {
      return this.singleCategory.favourites;
    },
    getCategoryList() {
      return this.$store.state.categories.map(item => ({
        value: item.id,
        text: item.name
      }));
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
    async removeMetadata(items, { index, id }) {
      try {
        await client.delete(`/metadata/${id}`);
        items.splice(index, 1);
        toastr.success("Successfully deleted");
      } catch (error) {
        return handleErrors(error);
      }
    },
    async addMetadata(items, name, selected, value, favourite) {
      try {
        const newMetadata = {
          name,
          data_type: selected,
          value,
          favourite
        };
        await metadataSchema.validate(newMetadata, validateOption);
        const { data } = await client.post("/metadata", newMetadata);
        toastr.success("Successfully added metadata");
        items.unshift(data);
      } catch (error) {
        handleErrors(error);
      }
    },
    setDeleteModalState({ title, id, category }) {
      this.$store.commit("setDeleteModalState", {
        modalTitle: "Delete Favourite",
        name: title,
        id,
        handleDelete: this.deleteFavourite,
        category
      });
    },
    setMetadata(metadata) {
      this.$store.commit("setMetadata", metadata);
    },
    async deleteFavourite({ name, id, category }) {
      try {
        await client.delete(`/favourites/${id}`);
        this.$store.commit("deleteFavourite", { id, category });
        toastr.success(`Successfully deleted: ${name}`, "Favourite");
      } catch (error) {
        return handleErrors(error);
      }
    },
    async updateFavourite({ id, ...update }) {
      try {
        await favouriteSchema.validate(update, validateOption);
        await client.put(`/favourites/${id}`, update);
        client.get(`/categories/${update.category}`).then(({ data }) => {
          this.$store.commit("setSingleCategory", data);
        });
        toastr.success(`Successfully updated favourite: ${update.title}`);
      } catch (error) {
        return handleErrors(error);
      }
    },
    setFavouriteModalState({ id, title, description, ranking, category }) {
      this.$store.commit("setFavouriteModalState", {
        modalTitle: "Edit Favourite",
        id,
        title,
        description,
        ranking,
        category,
        categoryList: this.getCategoryList,
        handleSubmit: this.updateFavourite
      });
    },
    gotoAuditLogs(id) {
      this.$router.push(`/favourites/${id}/logs`);
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
