<template>
  <div>
    <div>
      {{cardInfo.text}}
    </div>
    <div>
      <input 
        v-model="cardInfo.text"
        v-on:keyup="inputEnter"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "VueTalkRow",
  props: {
    cardInfo: Object
  },
  methods: {
    inputEnter(e){
      console.log(e);
      if(e.keyCode === 13){
        console.log('enter');
      } else {
        console.log('not enter');
      }
    }
  },
}
</script>

<style scoped>
  .panel-block {
    border-bottom: 1px solid #ededed;
  }
</style>
