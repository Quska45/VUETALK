<template>
  <side-layout class="side-layout"/>
  <main-layout class="main-layout"/>
  <div id="test">
    <input v-model="testInput">
    <button @click="testClick">클릭</button>
  </div>
</template>

<script>
import MainLayout from './components/mainLayout/MainLayout.vue';
import SideLayout from './components/sideLayout/SideLayout.vue'

import io from 'socket.io-client';
const socketOption = {
  cors: { origin: '*' }
};

export default {
  name: 'App',
  components: {
    MainLayout,
    SideLayout
  },
  data: function(){
    return {
      testInput: 'localhost'
    };
  },
  methods: {
    testClick: function(){
      console.log(this.testInput);
      try{
        const socket = io(`http://${this.testInput}:1024`, socketOption);
        socket.on('connect', function(){alert(123)});
      } catch( e ){
        console.log(e);
      }

    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-layout {
  width: 80%;
  display: inline-block;
}
.side-layout {
  width: 20%;
  display: inline-block;
}


</style>
