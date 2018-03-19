<template>
  <div class="header-container">
    <router-link :to="$route.path.substring(0,4) + `home`" class="header-home">
      <img src="@/assets/logo/logo.png"/>
    </router-link>
    <div class="header-nav">
      <router-link class="architecture-header" v-bind:class="{active: $route.path.indexOf(`/architecture`) !== -1}" :to="$route.path.substring(0,3) + `/architecture`">ARCHITECTURE</router-link>
      <router-link class="bio-header" v-bind:class="{active: $route.path.indexOf(`/bio`) !== -1}" :to="$route.path.substring(0,3) + `/bio`">BIO</router-link>
      <router-link class="design-header" v-bind:class="{active: $route.path.indexOf(`/design`) !== -1}" :to="$route.path.substring(0,3) + `/design`" v-if="$route.path.indexOf(`/en/`) !== -1">GRAPHIC DESIGN</router-link>
      <router-link class="design-header" v-bind:class="{active: $route.path.indexOf(`/design`) !== -1}" :to="$route.path.substring(0,3) + `/design`" v-else-if="$route.path.indexOf(`/fr/`) !== -1">GRAPHISME</router-link>
    </div>
    <div class="header-lang">
      <a :href="`en` | filteredUrl($route.path)">EN</a><p> | </p><a :href="`fr` | filteredUrl($route.path)">FR</a>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'be-header',
      filters: {
        filteredUrl: (string, actualRoute) => {
          // Return only the two first letters of the language, lower cased
          return '/' + string.toLowerCase() + '/' + actualRoute.replace(actualRoute.substring(0, 4), '')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #001023;
    .header-nav {
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
    .header-home {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .header-lang {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px 5px 20px;
      font-family: "Bebas Neue", sans-serif;
      color: #B3B3B3;
      width: 50px;
      a {
        text-decoration: none;
        color: #B3B3B3;
      }
    }
  }
</style>
