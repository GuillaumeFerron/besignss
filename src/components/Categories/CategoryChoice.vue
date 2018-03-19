<template>
  <router-link :to="category | filteredUrl" class="category-choice">
    <p class="category-label">{{category | upperCase}}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'category-choice',
    props: [
      'category'
    ],
    filters: {
      upperCase: (string) => {
        return string.toUpperCase()
      },
      filteredUrl: (string) => {
        // Return only the two first letters of the language, lower cased
        let newString = string
        if (string.toLowerCase() === 'graphisme') {
          newString = 'design'
        }
        return newString.toLowerCase()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category-choice {
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s;
    text-decoration: none;

    &:hover {
      background-color: rgba(193, 39, 45, 0.05);
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
      color: #001023;
      font-family: "Bavro", sans-serif;
      transition: all 0.5s;
    }
  }
</style>
