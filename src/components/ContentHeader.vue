<template>
  <b-row class="content-header">
    <b-col cols="5">
      <b-button @click="goback" variant="outline-primary">
        <i class="fa fa-arrow-left"></i> Back
      </b-button>
    </b-col>
    <b-col cols="7">
      <b class="header-font">{{headerText}}</b>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["goback", "headerText"]
};
</script>
