<template>
  <div id="app">
    <be-header v-if="$route.path.indexOf(`/home`) === -1"/>
    <div v-bind:class="{nothome: $route.path.indexOf(`/home`) === -1}">
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
  .nothome {
    padding-top: 46px;
  }
  @font-face {
    font-family: "Bavro";
    src: url("./assets/fonts/Bavro-Regular.ttf")
  }

  @font-face {
    font-family: "Champagne";
    src: url("./assets/fonts/Champagne-Limousines.ttf")
  }

  @font-face {
    font-family: "BebasNeue";
    src: url("./assets/fonts/BebasNeue.otf")
  }

  @font-face {
    font-family: "Uni";
    src: url("./assets/fonts/Uni-Sans-Thin.otf")
  }
</style>
