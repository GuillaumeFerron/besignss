<template>
  <div id="app">
    <be-header/>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import BeHeader from '@/components/BeHeader.vue'

  export default {
    components: {
      BeHeader
    },
    name: 'App'
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #content {
    padding-top: 46px;
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
