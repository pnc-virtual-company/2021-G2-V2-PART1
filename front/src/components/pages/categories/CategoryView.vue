<template>
  <section>
    <div>
      <search @showForm='showFormCategory ' @addName="searchName"></search>
      <base-dialog
        v-if="dialogDisplayed"
        :title="dialogTitle"
        @close="closeDialog"
      > 
        <div v-if="dialogMode !== 'remove' ">
          <label for="category">Category name</label>
          <input 
          type="text"
          id="category"
          placeholder="Name"
          v-model="ctrname"
          >
        </div>
        <div v-else>
          <h3>Are you sure you want to delete this Item?</h3>
        </div>
        <template #actions>
          <base-button @click="onConfirm" > {{dialogButton}} </base-button>
          <!-- <base-button  >  {{dialogButton}}  </base-button> -->
        </template>
      </base-dialog>

      <base-button
      class="right-man-button"
      @click="showCreateForm"
      >
      + Create
      </base-button>
      <section>
        <category-card 
        :category="categories"
        @toEdit="showEditForm"
        @toDelete="showDleteDailog"
        ></category-card>
      </section>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import BaseDialog from '../../../ui/BaseDialog.vue';
import BaseButton from '../../../ui/BaseButton.vue';
  const API_URL = "http://localhost:8000/api";
  export default {
  components: { BaseDialog, BaseButton },
    data() {
      return {
        categories: [],
        cateName:'',
        cate:'',
        ctrname: "",
        addFormShow: 0,
        message: "",
        isCreated: false,
        dialogMode: 'create',
        dialogDisplayed: false,
        categoryAction: null,
      }
    },
    computed: {
      dialogTitle() {
        // return this.dialogMode === 'create' ? 'Create Category' : 'Edit Category';
        let message = '';
        if(this.dialogMode === 'create') {
          message = "CREATE CATEGORY";
        } else if(this.dialogMode === 'edit') {
          message = "EDIT CATEGORY";
        } else if (this.dialogMode === 'remove') {
          message = "REMOVE CATEGORY?";
        }
        return message
      },
      dialogButton() {
        let message = '';
        if(this.dialogMode === 'create') {
          message = "CREATE";
        } else if(this.dialogMode === 'edit') {
          message = "UPDATE";
        } else if (this.dialogMode === 'remove') {
          message = "REMOVE";
        }else if(this.dialogMode==="close"){
          message="";
        }
        return message      
      }
    },
    methods: {
      closeDialog() {
        this.dialogDisplayed = false;
        this.name = ''
      },
      showCreateForm() {
        this.dialogDisplayed = true;
        this.dialogMode = 'create';
      },
      showEditForm(id, name) {
        this.dialogDisplayed = true;
        this.dialogMode = 'edit';
        this.categoryAction = {
          id: id,
          name: name
        }
        this.ctrname = this.categoryAction.name;
      },
      showDleteDailog(id) {
        this.dialogDisplayed = true;
        this.dialogMode = 'remove';
        this.categoryAction = {
          id: id,
        }
      },
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
      updateCategory(id){
        
        this.cateName=''
        this.addFormShow =0;
        let newData = {
          name: this.ctrname,
        }
        axios.put(API_URL + "/category/" +id, newData ).then((res) => {
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
      },
      onConfirm() {
        this.closeDialog();
        if(this.dialogMode === 'create') {
          this.createCategory(this.ctrname);
          
        } else if (this.dialogMode === 'edit') {
          this.updateCategory(this.categoryAction.id)
        } else if (this.dialogMode === 'remove') {
          this.removeCategory(this.categoryAction.id);
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

  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  .right-main-button {
    float: right;
    margin-left: 7px;
  }
</style>