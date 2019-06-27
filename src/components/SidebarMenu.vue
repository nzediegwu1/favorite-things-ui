<template>
  <Slide>
    <b-button @click="gotoHome" block variant="outline-primary">
      <i class="fa fa-home">
        &nbsp;
        <b>Home</b>
      </i>
    </b-button>
    <b-button v-b-modal.add-attribute block variant="outline-primary">
      <i class="fa fa-plus">
        &nbsp;
        <b>Add Attribute</b>
      </i>
    </b-button>
    <b-button @click="gotoFavourites" block variant="outline-primary">
      <i class="fa fa-vcard">
        &nbsp;
        <b>View Attributes</b>
      </i>
    </b-button>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  components: { Slide },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    gotoFavourites() {
      this.$router.push("/attributes");
    }
  },
  data() {
    return {};
  }
};
</script>
