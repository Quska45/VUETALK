<template>
  <div id="layout-container">
    <vue-talk-left-nav></vue-talk-left-nav>
    <nuxt></nuxt>
  </div>
</template>

<script>
import VueTalkLeftNav from "../components/LeftNav/VueTalkLeftNav";
export default {
  components: {VueTalkLeftNav}
}
</script>

<style>
  #layout-container {
    height: calc(100%);
  }
</style>

