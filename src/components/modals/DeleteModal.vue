<template>
  <b-modal
    @ok="handleOk"
    ref="delete-modal"
    id="delete-modal"
    :title="props.modalTitle"
  >
    <h6 class="my-4">{{ `Are you sure you want to delete ${props.name}?` }}</h6>
    <div class="form-buttons"></div>
  </b-modal>
</template>
<script>
export default {
  props: ["props"],
  methods: {
    handleOk() {
      this.props.handleDelete(this.props);
    }
  }
};
</script>
