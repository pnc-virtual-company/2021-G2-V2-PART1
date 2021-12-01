<template>
  <section>
    <navigation></navigation>
    <router-view></router-view>
  </section>
</template>

<script>
import Navigation from './components/menu/Navigation.vue';
  export default {
  components: { Navigation },
  // components: { Navigation },
  data() {
    return {
      categories: [
        { id: 1, name: "Manuel Lorenz", age: 21 },
        { id: 2, name: "Julie Jone", age: 31 },
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