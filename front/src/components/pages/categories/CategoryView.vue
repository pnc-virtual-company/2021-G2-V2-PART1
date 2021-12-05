<template>
  <div class="container">
    <btn-search @showForm="showFormCategory" @addName="searchName"></btn-search>
    <forms
      v-if="addFormShow"
      :isShowForm="addFormShow"
      @hideForm="hideCategoryForm"
      @addCategory="createCategory"
    ></forms>
    <section>
      <category
        v-for="(category, name, index) in categories"
        :key="index"
        :category="category"
        @deleteCategory="removeCategory"
      ></category>
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
      };
    },
    methods: {
      showFormCategory() {
        this.addFormShow = 1;
      },
      hideCategoryForm() {
        this.addFormShow = 0;
      },
      createCategory(name) {
        axios
          .post(API_URL + "/category", { name })
          .then((res) => {
            console.log(res.data);
            this.getCategory();
          })
          .catch((error) => {
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
      updateCategory(id) {
        axios.put(API_URL + "/category/" + id).then(() => {
          this.getCategory();
          console.log("updated");
        });
      },
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
