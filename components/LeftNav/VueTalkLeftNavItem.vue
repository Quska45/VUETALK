<template>
    <div class="left-nav-item" v-bind:class="isItemSelect" @click="clickItem">
      <nuxt-link :to="`/${this.url}`">{{this.urlNm}}</nuxt-link>
    </div>
</template>
<script>
export default {
  name: 'VueTalkLeftNav',
  data: function(){
    return {
      isItemSelect: '',
      count: this.$store.state.counter
    }
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    urlNm: {
      type: String,
      default: "main"
    }
  },
  methods: {
    clickItem: function(){
      alert(this.count);
      this.isItemSelect = this.isItemSelect === '' ? 'is-active' : '';
    }
  }
}
</script>
<style lang="scss">
  .left-nav-item {
    border-radius: 2px;
    color: #4a4a4a;
    display: block;
    padding: 0.5em 0.75em;
    cursor: pointer;
    &:hover a {
      color: #7957d5;
    }
  }
  .is-active {
    background-color: #7957d5;
    &:hover a {
      color: whitesmoke;
    }
  }
</style>
