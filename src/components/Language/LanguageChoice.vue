<template>
  <div class="language-choice">
    <router-link :to="language | filteredUrl">{{language}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'language-choice',
    props: [
      'language'
    ],
    filters: {
      filteredUrl: (string) => {
        // Return only the two first letters of the language, lower cased
        return string.toLowerCase().substr(0, 2)
      }
    }
  }
</script>

<style>

</style>
