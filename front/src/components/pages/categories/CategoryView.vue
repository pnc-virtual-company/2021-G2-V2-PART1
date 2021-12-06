<template>
  <section>
    <div>
      <search @showForm='showFormCategory ' @addName="searchName"></search>
      <category-form :isCreated='isCreated' :cate='cate' :cateName="cateName" v-if="addFormShow" :isShowForm='addFormShow' @hideForm="hideCategoryForm" @addCategory="createCategory"  @editCategory="updateCategory"></category-form>
      <section>
        <category-card :cate='cate' :cateName="cateName" @showFormCate ='showFormForEdit' @editCategory="updateCategory" :category="categories" @deleteCategory="removeCategory"></category-card>
        <!-- <category-card  :hideForm="hideCategoryForm" @isShowForm='addFormShow' @editCategory="updateCategory" ></category-card> -->
        <!-- @editCategory="updateCategory" -->
      </section>
    </div>
  </section>
</template>
<script>
  import axios from "axios";
  const API_URL = "http://localhost:8000/api";
  export default {
    // props: ['category',],
    data() {
      return {
        categories: [],
        cateName:'',
        cate:'',
        name: "",
        addFormShow: 0,
        message: "",
        isCreated: false,
      }
    },
    methods: {
      showFormForEdit(ctr){
        this.addFormShow = 1;
        this.isCreated = false;
        for(let category of this.categories){
          if(ctr.id === category.id){
            this.cateName = category.name;
            this.cate= ctr
          }
        }
      },


      showFormCategory() {
        this.addFormShow = 1;
        this.isCreated = true;
      },
      hideCategoryForm() {
        this.addFormShow = 0;
        this.cateName=''
      },
      createCategory(name) {
        axios.post(API_URL + "/category", { name }).then((res) => {
          console.log(res.data);
          this.getCategory();
        }).catch((error) => {
          this.message = error.response;
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
      updateCategory(name, id){
        // console.log(cate.name)
        
        this.cateName=''
        this.addFormShow =0;
    
        axios.put(API_URL + "/category/" +id, {name} ).then((res) => {
          console.log(res.data);
          // res.data.name = cateName;
          this.getCategory();
        })
        
        .catch((error) => {
          // this.message = error.response.data.errors.cate.name[0];
          console.log(error)
        });
        // console.log(this.hideCategoryForm());
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