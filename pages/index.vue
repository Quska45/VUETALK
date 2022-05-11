<template>
    <vue-talk-main-container></vue-talk-main-container>
</template>

<script>
import VueTalkMainContainer from '../components/MainContainer/VueTalkMainContainer';

export default {
  name: 'IndexPage',
  components: {
    VueTalkMainContainer
  }
}
</script>

<style>
  html,body, #__nuxt, #__layout, #index-container{
    height:100%!important;
    width: 100%!important;
  }
</style>
