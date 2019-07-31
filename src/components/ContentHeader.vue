<template>
  <b-row class="content-header">
    <b-col sm="2">
      <b-button @click="goback" variant="outline-secondary">
        <i class="fa fa-arrow-left"></i> Back
      </b-button>
    </b-col>
    <b-col sm="9">
      <b class="header-font">{{ headerText }}</b>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["goback", "headerText"]
};
</script>
