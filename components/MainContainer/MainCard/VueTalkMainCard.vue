<template>
  <div class="card">
      <vue-talk-card-head></vue-talk-card-head>
      <div class="card-container">
        <vue-talk-card-row v-for="(cardInfo, i) in cardInfos" v-bind:cardInfo="cardInfo"></vue-talk-card-row>
        <!--
        <vue-talk-card-row></vue-talk-card-row>
        <vue-talk-card-row></vue-talk-card-row>
        -->
      </div>
  </div>
</template>

<script>
import VueTalkCardRow from "./VueTalkCardRow";
import VueTalkCardHead from "./VueTalkCardHead";

export default {
  name: "VueTalkMainCard",
  props: {
    cardInfos: Array
  },
  components: {
    VueTalkCardRow,
    VueTalkCardHead
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log('this.cardInfos', this.cardInfos);
  }
}
</script>

<style lang="scss">
  .card {
    width: 40%;
    height: 100%;
    display: inline-block;
    margin-left: 7%;
  }
  .card-container {
    overflow-y: auto;
    //height: 360px;
    height: calc(100% - 55px);
  }
</style>
