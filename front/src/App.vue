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
      ]
    }
  },
}
</script>
<style>

  body {
    background: rgb(216, 216, 216);
  }

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --main-color: #750579;
  --main-color-light: #e21ee9;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.right-main-button {
  float: right;
  margin-left: 7px;
}
</style>