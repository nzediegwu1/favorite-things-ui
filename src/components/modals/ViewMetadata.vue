<template>
  <b-modal id="view-metadata" ref="view-metadata" hide-footer title="Metadata">
    <HandleMetadata :addMetadata="addMetadata" :removeMetadata="removeMetadata" :content="content"></HandleMetadata>
  </b-modal>
</template>

<script>
import HandleMetadata from "../HandleMetadata";

export default {
  props: ["content", "removeMetadata", "addMetadata"],
  components: {
    HandleMetadata
  }
};
</script>
