<template>
    <div v-bind:class="isActive" @click="selectNavItem">
      <nuxt-link class="left-nav-item" :to="`/${this.url}`">
        <i :class="`mdi mdi-${this.icon}`"></i>
      </nuxt-link>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: 'VueTalkLeftNav',
  data: function(){
    return {
    }
  },
  props: {
    url: {
      type: String,
      default: ''
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
    selectNavItem (){
      this.$store.commit( 'menus/selectNavItem', this.url );
    },
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
  .left-nav-item-link {
    width: 100%;
    height: 100%;
  }
</style>
