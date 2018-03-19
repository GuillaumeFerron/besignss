<template>
  <router-link :to="language | filteredUrl" class="language-choice">
    <p class="language-label">{{language | upperCase}}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'LanguageChoice',
    props: [
      'language'
    ],
    filters: {
      upperCase: (string) => {
        return string.toUpperCase()
      },
      filteredUrl: (string) => {
        // Return only the two first letters of the language, lower cased
        return string.toLowerCase().substr(0, 2)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .language-choice {
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s;
    text-decoration: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      color: #C1272D;
      font-size: 55px;
      p {
        font-size: 55px;
        color: #C1272D;
      }
    }
    p {
      font-size: 50px;
      color: #B3B3B3;
      font-family: "Bavro", sans-serif;
      transition: all 0.5s;
    }
  }
</style>
