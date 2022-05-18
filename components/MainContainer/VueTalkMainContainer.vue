<template>
  <div class="container is-fluid">
    <input @change="initUsers"></input>

  </div>
</template>
<script>
// import User from './Data/User';
// import Chat from './Data/Chat';
// import UserData from '/public/Data/Users';
import { mapMutations } from 'vuex';

export default {
  name: 'VueTalkMainContainer',
  methods: {
    ...mapMutations({
      initUsers: 'users/initUsers'
    })
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
  }
</style>
