<template>
  <div class="language-container">
    <language-choice v-for="item in availLanguages" :key="item" :language="item"/>
  </div>
</template>

<script>
  import LanguageChoice from '@/components/Language/LanguageChoice'

  export default {
    name: 'language',
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

<style lang="scss" scoped>
  .language-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #001023;
    height: 300px;
    width: 100%;
  }
</style>
