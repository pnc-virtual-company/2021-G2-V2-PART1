<template>
  <section>  
    <div class="card-categories">
      <div class="c-name">
        <h2>{{ category.name }}</h2>
      </div>
      <div class="change">
        <i id="edit-icon" class="fa fa-pencil"></i>
        <i id="delete-icon" @click="$emit('deleteCategory', category.id)" class="fa fa-trash"></i>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['category'],
  emits:['deleteCategory'],
  methods: {},
  mounted(){
    console.log(this.category)
  }
};
</script>

<style scoped>
  .card-categories{
    background: rgb(255, 255, 255);
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
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
    cursor: pointer;
  }
  .card-categories:hover .change #edit-icon{
    display: inline-block;
  }

  .card-categories:hover .change #delete-icon{
    display: inline-block;
  }
  
  .c-name{
    justify-content: flex-start;
  }

  #edit-icon{
    cursor: pointer;
    color: rgb(21, 76, 255);
    border: none;
    outline: none;
    width: 50px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    display: none;
  }

  #delete-icon{
    cursor: pointer;
    color:rgb(255, 10, 10);
    border: none;
    outline: none;
    width: 53px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    display: none;
  }  
</style>