<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: "Bavro";
    src: url("../static/fonts/Bavro-Regular.ttf")
  }

  @font-face {
    font-family: "Champagne";
    src: url("../static/fonts/Champagne-Limousines.ttf")
  }

  @font-face {
    font-family: "BebasNeue";
    src: url("../static/fonts/BebasNeue.otf")
  }

  @font-face {
    font-family: "Uni";
    src: url("../static/fonts/Uni-Sans-Thin.otf")
  }
</style>
