<template>
  <b-modal ref="delete-modal" id="delete-modal" :title="title">
    <h4 class="my-4">Are you sure you want to delete?</h4>
    <div class="form-buttons"></div>
  </b-modal>
</template>
<script>
export default {
  props: ["title"]
};
</script>
