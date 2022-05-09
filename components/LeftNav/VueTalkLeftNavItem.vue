<template>
    <div>
      <nuxt-link :to="`/${this.url}`">{{this.urlNm}}</nuxt-link>
    </div>
</template>
<script>
export default {
  name: 'VueTalkLeftNav',
  props: {
    url: {
      type: String,
      default: ""
    },
    urlNm: {
      type: String,
      default: "main"
    }
  }
}
</script>
<style lang="scss">

</style>
