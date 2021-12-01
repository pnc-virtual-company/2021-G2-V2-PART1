<template>
  <section>
    <category-view></category-view>
    <!-- <category-card></category-card> -->
  </section>
</template>

<script>
import CategoryView from "./components/categories/CategoryView.vue";
  export default {
  components: {CategoryView},
  data() {
    return {
      categories: [
        { id: 1, name: "Manuel Lorenz"},
        { id: 2, name: "Julie Jone"},
      ],
    };
  },
  provide() {
    return { categories: this.categories };
  },
};
</script>

<style>
  body {
    background: silver;
  }
</style>