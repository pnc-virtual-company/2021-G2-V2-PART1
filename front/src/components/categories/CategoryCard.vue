<template>
  <section>
    <h3>{{ category.name }}</h3>
    <div>
      <span class="edit-icon" >&#9998;</span>
      <span class="delete-icon">&#9249;</span>
    </div>
  </section>
</template>
<script>
export default {
  props: ["category"],
};
</script>

<style scoped>
  section { 
    margin: auto; 
    margin-top: 15px;
    width: 50%; 
    height: 7rem; 
    border-radius: 15px; 
    background-color: #f4f4f5;  
    display: flex; 
  } 
 
  h3 { 
    font-family: Sans-serif; 
    font-size: 2.5rem;
    margin-left: 30px;
    background: transparent; 
  } 

  div {
    margin: auto;
    margin-right: 80px;
  }

  span {
    font-size: 30px;
    display: inline-block;
    transform: rotateZ(0deg);
    padding: 20px;
  }

  .edit-icon {
    color: blue;
  }
  .delete-icon {
    color: red;
  }
</style>
