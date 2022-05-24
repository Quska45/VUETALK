<template>
    <a class="panel-block" @click="ClickPanelBlock">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
        bulma
    </a>
</template>

<script>
export default {
  name: "VueTalkRow",
  methods: {
    ClickPanelBlock: async function(){
      console.log(await this.$axios.$get('/api'))
    }
  }
}
</script>

<style scoped>
  .panel-block {
    border-bottom: 1px solid #ededed;
  }
</style>
