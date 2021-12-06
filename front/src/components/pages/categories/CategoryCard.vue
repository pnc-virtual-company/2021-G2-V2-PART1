<template>
  <section>  
    <div id="card-categories"  v-for="ctr of category" :key="ctr.id">
      <div class="c-name">
        <h2>{{ ctr.name }}</h2>
      </div>
      <div class="change" >
        <i id="edit-icon" class="fa fa-pencil" @click="showFormCategory(ctr)"></i>
        <i id="delete-icon" @click="$emit('deleteCategory', ctr.id)" class="fa fa-trash"></i>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['category'],
  emits:['deleteCategory', 'editCategory', "showFormCate", "showForm"],
  methods: {
    showFormCategory(ctr) {
      this.$emit("showFormCate",ctr);
    },
  },
};
</script>

<style scoped>

  #card-categories{
    background: rgb(218, 218, 218);
    box-shadow: 0px 2px 8px 2px rgba(196, 196, 196, 0.25);
    width: 50%;
    height: 60px;
    border-radius: 15px;
    padding: 10px;
    margin: 15px;
    margin-left: 25%;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  #card-categories:hover .change #edit-icon{
    display: inline-block;
  }

  #card-categories:hover .change #delete-icon{
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
    color:#f3381f;
    border: none;
    outline: none;
    width: 53px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    display: none;
  }  
  
</style>