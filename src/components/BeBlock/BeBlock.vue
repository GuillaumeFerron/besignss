<template>
  <div class="be-container">
    <div class="be-name">EMILIEN BOÜEXEL</div>
    <div class="be-logo">
      <img src="@/assets/logo/logo.png" alt="Besignss' Logo"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'be-block'
  }
</script>

<style lang="scss" scoped>
  .be-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #B3B3B3;
    .be-name {
      height: 50%;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #001023;
      font-family: Bebas Neue, sans-serif;
      font-size: 50px;
    }
    .be-logo {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
