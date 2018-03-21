<template>
  <div v-if="layout === 1" class="categories-container" v-bind:style="{ backgroundColor : bgColor}">
    <category-choice :label="label" :empty="false"/>
    <category-choice :empty="true" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam dolor ac condimentum bibendum."/>
  </div>
  <div v-else class="categories-container" v-bind:style="{ backgroundColor : bgColor}">
    <category-choice :empty="true" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam dolor ac condimentum bibendum."/>
    <category-choice :label="label" :empty="false"/>
  </div>
</template>

<script>
  import CategoryChoice from '@/components/Categories/CategoryChoice'

  export default {
    name: '',
    props: {
      label: {
        type: String
      },
      layout: {
        type: Number
      },
      bgColor: {
        type: String
      }
    },
    components: {
      CategoryChoice
    }
  }
</script>

<style lang="scss" scoped>
  .categories-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    width: 100%;
  }
</style>
