<template>
  <div class="card">

        <article class="panel is-primary">
          <vue-talk-card-head :cardTitle="cardTitle"></vue-talk-card-head>
          <vue-talk-card-row></vue-talk-card-row>
          <vue-talk-card-row></vue-talk-card-row>
          <vue-talk-card-row></vue-talk-card-row>
        </article>

  </div>
</template>

<script>
import VueTalkCardRow from "./VueTalkCardRow";
import VueTalkCardHead from "./VueTalkCardHead";

export default {
  name: "VueTalkMainCard",
  components: {
    VueTalkCardRow,
    VueTalkCardHead
  },
  data() {
    return {
      activeTab: 0,
      showBooks: false
    }
  },
  props:{
    cardTitle: {
      type: String,
      default: "Title"
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 40%;
    height: 100%;
    display: inline-block;
    margin-left: 7%;
  }
</style>
