<template>
  <div class="language-choice">
    <router-link :to="language | filteredUrl" append>{{language | upperCase}}</router-link>
  </div>
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
    max-width: 250px;
    a {
      font-size: 50px;
      text-decoration: none;
      color: #B3B3B3;
      font-family: "Bavro", sans-serif;
      transition: all 0.5s;

      &:hover {
        color: #C1272D;
        font-size: 55px;
      }
    }
  }
</style>
