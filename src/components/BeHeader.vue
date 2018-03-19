<template>
  <div class="header-container">
    <router-link class="architecture-header" v-bind:class="{active: $route.path.indexOf(`/architecture`) !== -1}" :to="$route.path.substring(0,3) + `/architecture`">ARCHITECTURE</router-link>
    <router-link class="bio-header" v-bind:class="{active: $route.path.indexOf(`/bio`) !== -1}" :to="$route.path.substring(0,3) + `/bio`">BIO</router-link>
    <router-link class="design-header" v-bind:class="{active: $route.path.indexOf(`/design`) !== -1}" :to="$route.path.substring(0,3) + `/design`" v-if="$route.path.indexOf(`/en/`) !== -1">GRAPHIC DESIGN</router-link>
    <router-link class="design-header" v-bind:class="{active: $route.path.indexOf(`/design`) !== -1}" :to="$route.path.substring(0,3) + `/design`" v-else-if="$route.path.indexOf(`/fr/`) !== -1">GRAPHISME</router-link>
  </div>
</template>

<script>
    export default {
      name: 'be-header'
    }
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #001023;
    .architecture-header {
      font-family: "Bebas Neue", sans-serif;
      padding: 0 20px 0 20px;
      font-size: 30px;
      text-decoration: none;
      color: #B3B3B3;
      transition: all 0.5s;
    }
    .design-header {
      font-family: "Bebas Neue", sans-serif;
      padding: 5px 20px 5px 20px;
      font-size: 30px;
      text-decoration: none;
      color: #B3B3B3;
      transition: all 0.5s;
    }
    .bio-header {
      font-family: "Bebas Neue", sans-serif;
      padding: 5px 20px 5px 20px;
      font-size: 30px;
      text-decoration: none;
      color: #B3B3B3;
      transition: all 0.5s;
    }
    .active {
      color: #C1272D;
      text-decoration: line-through;
    }
  }
</style>
