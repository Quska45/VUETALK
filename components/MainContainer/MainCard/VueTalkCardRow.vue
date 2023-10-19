<template>
  <div>
    <div>
      {{cardInfo.text}}
    </div>
    <div>
      <input v-model="cardInfo.text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueTalkRow",
  props: {
    cardInfo: Object
  },
  methods: {
  },
}
</script>

<style scoped>
  .panel-block {
    border-bottom: 1px solid #ededed;
  }
</style>
