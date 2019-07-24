<template>
  <div  class="row new-metadata">
    <b-form-input placeholder="name" class="col-3" type="text"></b-form-input>
    <b-form-select v-model="selected" class="col-3" :options="dropdownList"></b-form-select>
    <b-input-group class="col-5">
      <b-form-input placeholder="value" :type="selected"></b-form-input>
      <b-input-group-append>
        <b-button class="btn-metadata" variant="secondary">
          <i class="fa fa-check"></i>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
export default {
  props: ["dropdownList", "selected"],
  
};
</script>
