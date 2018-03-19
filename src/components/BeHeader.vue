<template>
  <div class="header-container">
    <router-link class="architecture-header" to="/architecture">ARCHITECTURE</router-link>
    <router-link class="bio-header" to="/bio">BIO</router-link>
    <router-link class="design-header" to="/design">GRAPHIC DESIGN</router-link>
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
    }
    .design-header {
      font-family: "Bebas Neue", sans-serif;
      padding: 5px 20px 5px 20px;
      font-size: 30px;
      text-decoration: none;
      color: #B3B3B3;
    }
    .bio-header {
      font-family: "Bebas Neue", sans-serif;
      padding: 5px 20px 5px 20px;
      font-size: 30px;
      text-decoration: none;
      color: #B3B3B3;
    }
  }
</style>
