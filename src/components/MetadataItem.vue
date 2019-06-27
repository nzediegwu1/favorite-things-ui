<template>
  <b-form-group>
    <div class="row new-metadata">
      <b-form-select v-model="isSelected" class="col-sm-6" :options="dropdownList"></b-form-select>
      <b-form-input class="col-sm-6" type="text"></b-form-input>
    </div>
  </b-form-group>
</template>
<script>
export default {
  props: ["dropdownList", "selected"],
  data() {
    return {
      isSelected: this.$props.selected
    };
  }
};
</script>
