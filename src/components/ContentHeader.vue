<template>
  <b-container class="bv-example-row">
    <b-row class="log-control">
      <b-col cols="5">
        <b-button @click="goback" variant="outline-primary">
          <i class="fa fa-arrow-left"></i> Back
        </b-button>
      </b-col>
      <b-col cols="7">
        <b class="favourite-tag">{{headerText}}</b>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['goback', 'headerText']
}
</script>
