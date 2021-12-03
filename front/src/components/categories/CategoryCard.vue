<template>
  <section>  
    <div class="card-categories" v-for="ctr of category" :key="ctr.id">
      <div class="c-name">
        <h2>{{ ctr.name }}</h2>
      </div>
      <div class="change">
        <button class="edit-icon">Edit</button>
        <button class="delete-icon" @click="$emit('deleteCategory', ctr.id)" >Delete</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['category'],
  emits:['deleteCategory'],
  methods: {
  },
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
    background: rgb(38, 252, 102);
    border: none;
    outline: none;
    width: 50px;
    height: 30px;
    margin: 10px;
    font-size: 15px;
    text-align: center;
  }
  .delete-icon{
    cursor: pointer;
    color:#fff;
    border: none;
    outline: none;
    width: 53px;
    height: 30px;
    font-size: 15px;
    background: rgb(248, 32, 32);
    text-align: center;
  }
</style>