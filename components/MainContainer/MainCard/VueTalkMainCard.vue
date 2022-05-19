<template>
  <div class="card">
    <b-tabs v-model="activeTab">
      <b-tab-item label="Pictures">
        <article class="panel is-primary">
          <vue-talk-card-head :cardTitle="cardTitle"></vue-talk-card-head>
          <vue-talk-card-row></vue-talk-card-row>
        </article>
      </b-tab-item>
      <b-tab-item label="Pictures">
        <article class="panel is-primary">
          <vue-talk-card-head :cardTitle="cardTitle"></vue-talk-card-head>
          <vue-talk-card-row></vue-talk-card-row>
        </article>
      </b-tab-item>
    </b-tabs>
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
