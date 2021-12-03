<template>
  <section>
    <div>
      <search @showForm='showFormCategory ' @addName="searchName"></search>
      <category-form v-if="addFormShow" :isShowForm='addFormShow' @hideForm="hideCategoryForm" @addCategory="createCategory"></category-form>
      <section>
        <category-card :category="categories" @deleteCategory="removeCategory"></category-card>
      </section>
    </div>
  </section>
</template>
<script>
    import axios from "axios";
  const API_URL = "http://localhost:8000/api";
  export default {
    props: ['category'],
    data() {
      return {
        categories: [],
        name: "",
        addFormShow: 0,
      }
    },
    methods: {
      showFormCategory() {
        this.addFormShow = 1;
      },
      hideCategoryForm() {
        this.addFormShow = 0;
      },
      createCategory(name) {
        axios.post(API_URL + "/category", { name }).then((res) => {
          console.log(res.data);
          this.getCategory();
        }).catch((error) => {
          this.message = error.response.data.errors.name[0];
        });
        this.hideCategoryForm();
      },  
      getCategory() {
        axios.get(API_URL + "/category").then((res) => {
          this.categories = res.data;
        });
      },
      removeCategory(id){
        axios.delete(API_URL+"/category/"+id).then(()=>{
          this.getCategory();
          console.log("deleted")
        })
      },
      updateCategory(id){
        axios.put(API_URL+"/category/"+id).then(()=>{
          this.getCategory();
          console.log("updated")
        })
      },
      searchName(name) {
        if(name !== '') {
          axios.get(API_URL + "/category/search/" + name).then(res => {
            this.categories = res.data;
            console.log(this.createCategory)
          })
        }else {
          this.getCategory();
        }
      }
    },
    mounted() {
      this.getCategory()
    },
  }
</script>

<style scoped>
  form {
    margin-left: 200px;
    margin-top: 30px;
  }
  .createCategory{
    cursor: pointer;
  }
</style>