<template>
<nav class="nav has-shadow">
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet">
        <span class="icon">
            <fa :icon="fas.faHome">
            <font-awesome-icon :icon="['home']"/>
            <i class="fa fa-home"></i>
        </span> Home
      </a>
      <a class="nav-item is-tab is-hidden-tablet">
        <span class="icon"><i class="fa fa-table"></i></span> Links
      </a>
      <a class="nav-item is-tab is-hidden-tablet">
        <span class="icon"><i class="fa fa-info"></i></span> About
      </a>
      
      <a class="nav-item is-tab is-active">
        <span class="icon"><i class="fa fa-user"></i></span>
      </a>
      <a class="nav-item is-tab">
        <span class="icon"><i class="fa fa-sign-out"></i></span>
      </a>
    </div>
</nav>
</template>
<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
export default {
    name: 'LeftNav',
    computed: {
        fas() {
            return fas
        }
    }
}
</script>
<style>
</style>