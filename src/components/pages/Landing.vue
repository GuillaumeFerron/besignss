<template>
  <div class="landing-container">
    <be-block/>
    <language/>
    <categories label="Architecture" :layout="1" bgColor="#C1272D"/>
    <categories label="Design" :layout="2" bgColor="#C1272D"/>
  </div>
</template>

<script>
  import Language from '@/components/Language/Language.vue'
  import BeBlock from '@/components/BeBlock/BeBlock'
  import Categories from '@/components/Categories/Categories.vue'

  export default {
    name: 'landing',
    components: {
      BeBlock,
      Language,
      Categories
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
