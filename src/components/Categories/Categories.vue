<template>
  <div class="categories-container">
    <category-choice v-for="item in categoriesArray" :key="item" :category="item"/>
  </div>
</template>

<script>
  import CategoryChoice from '@/components/Categories/CategoryChoice'

  export default {
    name: '',
    data  () {
      if (this.$route.path.indexOf('/en/') !== -1) {
        return {
          categoriesArray: [
            'Architecture',
            'Design'
          ]
        }
      } else {
        return {
          categoriesArray: [
            'Architecture',
            'Graphisme'
          ]
        }
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
    background-color: #C1272D;
    height: 80vh;
    width: 100%;
  }
</style>
