<template>
  <div class="container">
  </div>
</template>
<script>
import VueTalkBaseContainer from "./VueTalkBaseContainer";

export default {
  name: 'VueTalkMainContainer',
  extends: VueTalkBaseContainer,
}
</script>
<style>
  .container {
    position: absolute;
    top: 0;
    left: 95px;
    width: calc(100% - 95px);
    height: 100%;
    background-color: antiquewhite;
  }

</style>
