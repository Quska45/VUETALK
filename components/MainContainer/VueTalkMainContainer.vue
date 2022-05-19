<template>
  <div class="container is-fluid">
    <vue-talk-main-card v-for="cardTitle in cardTitles" :key="cardTitle" :cardTitle="cardTitle"></vue-talk-main-card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import VueTalkMainCard from "./VueTalkMainCard";

export default {
  name: 'VueTalkMainContainer',
  components: {
    VueTalkMainCard
  },
  methods: {
    ...mapMutations({
      initUsers: 'users/initUsers'
    })
  },
  data: function (){
    return {
      cardTitles: [ '친구', '채팅' ]
    };
  },
  mounted() {
    // 유저 데이터 세팅
    this.initUsers();
  }
}
</script>
<style>
  .container {
    position: absolute;
    top: 0;
    left: 95px;
    width: calc(100% - 95px)!important;
    height: 100%;
    background-color: antiquewhite;
    padding-top: 32px;
    padding-bottom: 32px;
  }
</style>
