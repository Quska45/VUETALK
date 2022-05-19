<template>
  <div class="container is-fluid">
    <vue-talk-main-card></vue-talk-main-card>
    <vue-talk-main-chat-card></vue-talk-main-chat-card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import VueTalkMainCard from "./MainCard/VueTalkMainCard";
import VueTalkMainChatCard from "./MainChatCard/VueTalkMainChatCard";
import VueTalkTab from "./MainCard/VueTalkTab";

export default {
  name: 'VueTalkMainContainer',
  components: {
    VueTalkTab,
    VueTalkMainCard,
    VueTalkMainChatCard
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
