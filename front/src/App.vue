<template>
  <div>
    <category-view :categories='categories'></category-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        {id: 1, name: 'Sport'},
        {id: 2, name: 'Hiking'},
        {id: 3, name: 'Party'},
        {id: 4, name: 'Meetingdfghjkl'},
      ]
    }
  },
}
</script>

<style>
  body {
    background: rgb(216, 216, 216);
  }
</style>