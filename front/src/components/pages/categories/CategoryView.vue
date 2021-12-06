<template>
  <div class="container">
    <btn-search @showForm="showFormCategory" @addName="searchName"></btn-search>
    <forms 
    v-if="addFormShow" 
    :isCreated='isCreated' 
    :cate='cate' 
    :cateName="cateName" 
    :isShowForm="addFormShow" 
    @hideForm="hideCategoryForm" @addCategory="createCategory"></forms>
    <section>
      <category v-for="(category, name, index) in categories" :key="index" 
      :cate='cate' 
      :cateName="cateName" 
      @showFormCate ='showFormForEdit' 
      @editCategory="updateCategory" :category="category" @deleteCategory="removeCategory"></category>
    </section>
  </div>
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
      "btn-search": BtnSearch,
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
      };
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
      // ==========================================
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
          this.message = error.response.data.errors.name[0];
        });
        this.hideCategoryForm();
      },
      getCategory() {
        axios.get(API_URL + "/category").then((res) => {
          this.categories = res.data;
        });
      },
      removeCategory(id) {
        axios.delete(API_URL + "/category/" + id).then(() => {
          this.getCategory();
          console.log("deleted");
        });
      },

      // ======================================UPDATE CATEGORY========================================
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

      // ======================================SEARCH CATEGORY========================================
      searchName(name) {
        if (name !== "") {
          axios.get(API_URL + "/category/search/" + name).then((res) => {
            this.categories = res.data;
            console.log(this.createCategory);
          });
        }else {
          this.getCategory();
        }
      },
    },
    mounted() {
      this.getCategory();
    },
  };
</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
  }
  
</style>
