<template>
  <b-modal id="view-metadata" ref="view-metadata" hide-footer title="Metadata">
    <HandleMetadata></HandleMetadata>
  </b-modal>
</template>

<script>
import HandleMetadata from "../HandleMetadata";

export default {
  components: {
    HandleMetadata
  }
};
</script>
