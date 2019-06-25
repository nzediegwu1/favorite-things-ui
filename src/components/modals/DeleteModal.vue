<template>
  <b-modal ref="delete-modal" id="delete-modal" :title="deleteModalTitle">
    <h4 class="my-4">Are you sure you wish to delete this?</h4>
    <div class="form-buttons"></div>
  </b-modal>
</template>
<script>
export default {
  props: ["deleteModalTitle"]
};
</script>
