<template>
  <div class="landing-container">
    <be-block/>
    <language/>
  </div>
</template>

<script>
  import Language from '@/components/Language/Language.vue'
  import BeBlock from '@/components/BeBlock/BeBlock'

  export default {
    name: 'landing',
    components: {
      BeBlock,
      Language
    }
  }
</script>

<style lang="scss" scoped>
  .landing-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
