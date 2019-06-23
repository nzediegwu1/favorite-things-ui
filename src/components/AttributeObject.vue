<template>
  <b-form-group>
    <div class="row new-attribute">
      <b-form-select class="col-sm-6" :options="dropdownList"></b-form-select>
      <b-form-input class="col-sm-6" type="text"></b-form-input>
    </div>
  </b-form-group>
</template>
<script>
export default {
  props: ['dropdownList']
};
</script>
