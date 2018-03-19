<template>
  <div class="landing-container">
    <language/>
  </div>
</template>

<script>
  import Language from '@/components/Language/Language.vue'

  export default {
    name: 'landing',
    components: {
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
