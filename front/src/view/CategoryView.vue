<template>
  <section>
    <div>
      <search @showForm='showFormCategory' @addName="searchName"></search>
      <forms 
      :isCreated='isCreated' 
      :cate='cate' 
      :cateName="cateName" 
      v-if="addFormShow" 
      :isShowForm='addFormShow' 
      @hideForm="hideCategoryForm" 
      @addCategory="createCategory"  
      @editCategory="updateCategory"></forms>
      <section>
        <category 
        :cate='cate' 
        :cateName="cateName" 
        @showFormCate ='showFormForEdit'
        @editCategory="updateCategory" 
        :category="categories" 
        @deleteCategory="removeCategory"></category>
      </section>
    </div>
  </section>
</template>
<script>
  import axios from '../axios-request.js'
  import FormInput from "../components/categories/CategoryForm.vue";
  import categoryCard from "../components/categories/CategoryCard.vue";
  import BtnSearch from "../components/categories/Search.vue";
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
      // show form edit category
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
        axios.post("/category", { name }).then((res) => {
          console.log(res.data);
          this.getCategory();
        }).catch((error) => {
          this.message = error.response;
        });
        this.hideCategoryForm();
      },  
      getCategory() {
        axios.get("/category").then((res) => {
          this.categories = res.data;
        });
      },
      removeCategory(id){
        axios.delete("/category/"+id).then(()=>{
          this.getCategory();
          console.log("deleted")
        })
      },
      updateCategory(name, id){        
        this.cateName=''
        this.addFormShow =0;
        axios.put("/category/" +id, {name} ).then((res) => {
          console.log(res.data);
          this.getCategory();
        }).catch((error) => {
          console.log(error)
        });
      },
      searchName(name) {
        if(name !== '') {
          axios.get("/category/search/" + name).then(res => {
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