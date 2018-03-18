<template>
  <div class="language-container">
    <language-choice v-for="item in availLanguages" :key="item" :language="item"/>
  </div>
</template>

<script>
  import LanguageChoice from '@/components/Language/LanguageChoice'

  export default {
    name: 'Language',
    data  () {
      return {
        availLanguages: [
          'English',
          'Français'
        ]
      }
    },
    components: {
      LanguageChoice
    }
  }
</script>

<style>

</style>
