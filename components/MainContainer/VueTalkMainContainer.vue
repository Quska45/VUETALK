<template>
  <div class="container is-fluid">
    <button @click="initSocket">asdfsd</button>
    <vue-talk-main-card></vue-talk-main-card>
<!--    <vue-talk-main-card></vue-talk-main-card>-->
    <vue-talk-main-chat-card></vue-talk-main-chat-card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import VueTalkMainCard from "./MainCard/VueTalkMainCard";
import VueTalkMainChatCard from "./MainChatCard/VueTalkMainChatCard";
import { io } from 'socket.io-client'

export default {
  name: 'VueTalkMainContainer',
  components: {
    VueTalkMainCard,
    VueTalkMainChatCard
  },
  methods: {
    ...mapMutations({
      initUsers: 'users/initUsers',
      initChats: 'users/initChats',
      initSocket: 'socket/initSocket'
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
    this.initChats();
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
