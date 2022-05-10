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
  html,body, #__nuxt, #__layout, #layout-container{
    height:100%!important;
    width: 100%!important;
  }
</style>

