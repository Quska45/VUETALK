<template>
    <div class="left-nav-item" v-bind:class="`${this.isActive}`" @click="selectNavItem">
      <nuxt-link :to="`/${this.url}`">
        <i :class="`mdi mdi-${this.icon}`"></i>
      </nuxt-link>
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
    isActive: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectNavItem: function(){
      this.$emit('select-nav-item', this.url)
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
    i {
      color: aliceblue;
    }
  }
</style>
