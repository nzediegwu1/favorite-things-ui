<template>
  <b-modal ref="delete-modal" id="delete-modal" :title="title">
    <h6 class="my-4">Are you sure you want to delete this?</h6>
    <div class="form-buttons"></div>
  </b-modal>
</template>
<script>
export default {
  props: ["title"]
};
</script>
