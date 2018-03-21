<template>
  <router-link v-if="!empty" :to="label | filteredUrl" class="category-choice parallax" v-bind:class="label.toLowerCase()">
    <p class="category-label">{{label | upperCase}}</p>
  </router-link>
  <div v-else class="category-empty">
    <p class="category-content">{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'category-choice',
    props: {
      label: {
        type: String
      },
      empty: {
        type: Boolean
      },
      content: {
        type: String
      }
    },
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
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    &:hover {
      background-color: rgba(0, 16, 35, 0.05);
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
  .category-empty {
    width: 50%;
    max-width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s;
    text-decoration: none;
    .category-content {
      padding: 10px;
      font-size: 40px;
      max-width: 100%;
      max-height: 100%;
      word-break: break-all;
      color: #FFF;
      font-family: Champagne, sans-serif;
    }
  }
  .architecture {
    background-image: url("../../assets/landing/architecture.jpeg");
  }
  .design {
    background-image: url("../../assets/landing/design.png");
  }
  .graphisme {
    background-image: url("../../assets/landing/design.png");
  }
</style>
