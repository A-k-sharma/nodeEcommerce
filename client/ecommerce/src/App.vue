<template>
  <div id="app">
    <div class="navBar">
      <navBar></navBar>
    </div>
    <div class="mainPage">
      <router-view/>
    </div>
  </div>
</template>

<script>

import navBar from './components/navBar';

export default {
  name: 'app',
  components: {
    navBar,
  }
}
</script>

<style>
  .navBar{
    height: 80px;
  }
  .mainPage{
    height: calc(100% - 80px);
  }
  body{
    background-color: rgb(231, 231, 231);
  }
</style>
