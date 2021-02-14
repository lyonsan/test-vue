<template>
  <div id="app">
    <tab-menu></tab-menu>
    <router-view/>
  </div>
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    TabMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial,'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
