<template>
    <div>
        <router-view></router-view>
        <category-view :categories='categories'></category-view>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      categories: [
      ]
    }
  },
}
</script>

<style scoped>
  body {
    background: rgb(231, 231, 231);
  }
</style>