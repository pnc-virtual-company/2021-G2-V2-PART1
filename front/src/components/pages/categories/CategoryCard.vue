<template>
  <section>  
    <div class="card-categories">
      <div class="c-name">
        <h2>{{ category.name }}</h2>
      </div>
      <div class="change">
        <button class="edit-icon">Edit</button>
        <button class="delete-icon">Delete</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['category'],
};
</script>

<style scoped>
  .card-categories{
    background: rgb(255, 255, 255);
    width: 50%;
    height: 60px;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    margin-left: 25%;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c-name{
    justify-content: flex-start;
  }

  .edit-icon{
    cursor: pointer;
    color: #fff;
    background: rgba(38, 252, 102, 0.842);
    border: none;
    outline: none;
    width: 50px;
    height: 30px;
    margin: 5px;
    font-size: 15px;
  }
  .delete-icon{
    cursor: pointer;
    color:#fff;
    border: none;
    outline: none;
    width: 50px;
    height: 30px;
    font-size: 15px;
    background: rgba(248, 32, 32, 0.774);
  }
</style>