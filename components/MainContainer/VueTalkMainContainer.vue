<template>
  <div class="container is-fluid">
    <vue-talk-main-card v-bind:cardInfos="cardInfos" ></vue-talk-main-card>
<!--    <vue-talk-main-card></vue-talk-main-card>-->
    <vue-talk-main-chat-card></vue-talk-main-chat-card>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import VueTalkMainCard from "./MainCard/VueTalkMainCard";
import VueTalkMainChatCard from "./MainChatCard/VueTalkMainChatCard";

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
    }),

    method1() {
      /* Emit events */
      this.socket.emit('method1', {
        hello: 'world'
      }, (resp) => {
        /* Handle response, if any */
      })
    }
  },
  data: function (){
    return {
      cardInfos: [
        {
          id: 1,
          name: '카드1',
          text: '카드1 텍스트'
        },
        {
          id: 2,
          name: '카드2',
          text: '카드2 텍스트'
        },
      ],
      socket: null,
    };
  },
  mounted() {
    // 유저 데이터 세팅
    this.initUsers();
    this.initChats();

    // this.socket = this.$nuxtSocket({
    //   name: 'home',
    //   vuex: { // overrides the vuex opts in the nuxt.config above.
    //     mutations: ['examples/SET_PROGRESS'],
    //     actions: ['FORMAT_MESSAGE'],
    //     emitBacks: ['examples/sample']
    //   }
    // })

    this.socket = this.$nuxtSocket({
      channel: '/index'
    })
    /* Listen for events: */
    this.socket.on('someEvent', (msg, cb) => {
      /* Handle event */
    })
  },
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
