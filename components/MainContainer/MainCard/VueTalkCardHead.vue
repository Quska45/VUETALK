<template>
  <p class="panel-heading">
    {{cardTitle}}
  </p>
</template>

<script>
export default {
  name: "VueTalkRowHead",
  data: function() {
    let menus = this.$store.state.menus.list;
    let menuKeys = Object.keys( menus );
    let activeMenu = menuKeys.reduce(function( acc, cur ){
      if( menus[ cur ].isActive === 'is-active' ){
        acc = menus[ cur ];
      };
      return acc;
    }, {});

    return {
      cardTitle: activeMenu.url
    }
  }
}
</script>

<style scoped>
  .panel-heading {
    background-color: #7957d5;
    color: white;
  }
</style>
