<template>
  <div class="container">
    <div class="text-center">
      <b class="favourite-tag">Favourite {{ favouriteItem }}</b>
    </div>
    <b-table outlined responsive striped hover :fields="fields" :items="items">
      <template slot="attributes" slot-scope="data" v-html="data">
        <b-button class="btn-attributes" v-b-modal.view-attributes>
          <i class="fa fa-info-circle"></i>
        </b-button>
      </template>
      <template slot="manage" slot-scope="data" v-html="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <b-dropdown dropright text variant="primary">
          <b-dropdown-item v-b-modal.edit-favourite href="#" class="edit-favourite">
            <i class="fa fa-edit">&nbsp; Edit</i>
          </b-dropdown-item>
          <b-dropdown-item v-b-modal.delete-favourite href="#">
            <i class="fa fa-trash">&nbsp; Delete</i>
          </b-dropdown-item>
        </b-dropdown>
        <!-- <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a> -->
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
          ranking: 40,
          title: "Dickerson",
          description: "The guy who made me believe in myself",
          attributes: ""
        },
        {
          ranking: 21,
          title: "Larsen",
          description: "My childhood friend since day 1",
          attributes: ""
        },
        {
          ranking: 89,
          title: "Geneva",
          description:
            "An awesome software engineer who mentored me at my early days",
          attributes: ""
        },
        {
          ranking: 38,
          title: "Jami",
          description: "My gist buddy. Very smart dude. I can fight for him",
          attributes: ""
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
          key: "attributes"
        },
        {
          key: "manage",
          label: "⚙️"
        }
      ],
      favouriteItem: "Friends"
    };
  }
};
</script>
