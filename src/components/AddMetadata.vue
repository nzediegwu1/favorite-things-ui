<template>
  <div class="row new-metadata">
    <b-form-input placeholder="name" class="col-3" type="text"></b-form-input>
    <b-form-select v-model="isSelected" class="col-3" :options="dropdownList"></b-form-select>
    <b-form-input placeholder="value" class="col-3" type="text"></b-form-input>
    <b-button class="add-metadata-btn col-1" variant="primary">
      <i class="fa fa-send"></i>
    </b-button>
  </div>
</template>
<script>
export default {
  props: ["dropdownList", "selected", ],
  data() {
    return {
      isSelected: this.$props.selected
    };
  }
};
</script>
