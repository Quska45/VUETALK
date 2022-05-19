<template>
  <b-tabs v-model="activeTab">
    <vue-talk-main-card></vue-talk-main-card>
  </b-tabs>
</template>

<script>
import VueTalkMainCard from "./VueTalkMainCard";

export default {
  name: "VueTalkTab",
  data() {
    return {
      activeTab: 0,
      showBooks: false
    }
  },
  components: {
    VueTalkMainCard
  }
}
</script>

<style scoped>

</style>
