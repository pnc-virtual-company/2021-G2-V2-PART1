<template>
  <section>
    <div>
      <search @showForm='showFormCategory' @addName="searchName"></search>
      <forms :isCreated='isCreated' :cate='cate' :cateName="cateName" v-if="addFormShow" :isShowForm='addFormShow' @hideForm="hideCategoryForm" @addCategory="createCategory" @editCategory="updateCategory"></forms>
      <section>
        <category :cate='cate' :cateName="cateName" @showFormCate ='showFormForEdit' @editCategory="updateCategory" :category="categories" @deleteCategory="removeCategory"></category>
      </section>
    </div>
  </section>
</template>
<script>
  import axios from "axios";
  import FormInput from "./CategoryForm.vue";
  import categoryCard from "./CategoryCard.vue";
  import BtnSearch from "./Search.vue";
  const API_URL = "http://localhost:8000/api";
  export default {
    components: {
      forms: FormInput,
      category: categoryCard,
      search: BtnSearch
    },
    data() {
      return {
        categories: [],
        name: "",
        addFormShow: 0,
        message: "",
        cateName:'',
        cate:'',
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
        this.cateName=''
        this.addFormShow =0;
        axios.put(API_URL + "/category/" +id, {name} ).then((res) => {
          console.log(res.data);
          this.getCategory();
        }).catch((error) => {
          console.log(error)
        });
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