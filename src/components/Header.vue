<template>
  <div class="header-container">
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-brand @click="gotoHome" href="#">
        <b-button variant="outline-primary">FT</b-button>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-button v-b-modal.add-favourite class="nav-btn" variant="outline-primary">
              <i class="fa fa-plus"></i>
              {{ " " }}
              <i class="fa fa-heart"></i>
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button v-b-modal.add-group class="nav-btn" variant="outline-primary">
              <i class="fa fa-plus"></i> Group
              <!-- <i class="fa fa-group"></i> -->
            </b-button>
          </b-nav-item>
          <b-nav-item href="#">
            <b-button v-b-modal.add-attribute class="nav-btn" variant="outline-primary">
              <i class="fa fa-plus"></i> Attr
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 search-button" type="submit">
              <i class="fa fa-search"></i>
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Filter" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Modal></Modal>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  methods: {
    gotoHome() {
      this.$router.push("/");
    }
  },
  components: {
    Modal
  }
};
</script>
