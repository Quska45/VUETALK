<template>
  <p class="panel-heading">
    {{cardTitle}}
  </p>
</template>

<script>
export default {
  name: "VueTalkRowHead",
  props: {
    cardTitle: {
      type: 'String',
      default: 'Title'
    }
  }
}
</script>

<style scoped>

</style>
