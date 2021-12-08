<template>
  <section>  
    <div id="card-categories"  v-for="ctr of category" :key="ctr.id">
      <div class="c-name">
        <h3>{{ ctr.name }}</h3>
      </div>
      <div class="change" >
<<<<<<< HEAD
        <i id="delete-icon" @click="$emit('deleteCategory', ctr.id)" class="fa fa-trash"></i>
        <i id="edit-icon" class="fa fa-pencil" @click="showFormCategory(ctr)"></i>
=======
        <i id="edit-icon" class="fa fa-pencil" @click="showEditRessource(ctr.name, ctr.id)"></i>
        <i id="delete-icon" class="fa fa-trash" @click="showDeleteRessource(ctr.id)"></i>
>>>>>>> 388fc25a44b7df25eddcf6726653532407c05e48
      </div>
    </div>

    <base-dialog v-if="dialogDisplayed" :title="dialogTitle" @close="closeDialog">
      <label for="description" v-if="dialogMode === 'edit'">Category Name</label>
      <textarea v-model="dialogTextField" id="description" name="description" rows="3" ref="descInput" v-if="dialogMode === 'edit'"></textarea>
      <h2 id="ask" v-if="dialogMode !== 'edit' "><i class="fa fa-exclamation-triangle" ></i> Do you want to delete this category?</h2>
      <template #actions>
        <button @click="onConfirm">{{ dialogButtton }}</button>
      </template>
    </base-dialog>
  </section>
</template>

<script>

import BaseDialog from '../UI/BasDialog.vue';

export default {
  props: ['category'],
  emits:['editCategory', "showFormCate", "showForm", "delete"],
  components:{BaseDialog},
  data(){
    return{
      dialogMode: 'edit', 
      dialogDisplayed: false,
      dialogTextField: '',
      categoryId: null,
    }
  },
  computed: {
    dialogTitle() {
      return this.dialogMode === 'edit' ? 'EDIT RESSOURCE' : 'DELETE RESSOURCE';
    },
    dialogButtton() {
      return this.dialogMode === 'edit' ? 'EDIT' : 'DELETE';
    },
  },
  methods: {
   
    closeDialog() {
      this.dialogDisplayed = false;
      this.categoryId = null;
    },
    showEditRessource(categoryName, id) {
      this.dialogMode = 'edit';
      this.dialogTextField = categoryName;
      this.dialogDisplayed = true;
      this.categoryId = id;

    },

    showDeleteRessource(id) {
      this.dialogMode = 'delete';
      this.dialogDisplayed = true;
      this.categoryId = id;
    },

    onConfirm() {
      if (this.dialogMode === 'edit') {
        console.log(' edited');
        this.$emit('editCategory', this.dialogTextField, this.categoryId);
      } else {
        console.log(this.categoryId);
        this.$emit('delete', this.categoryId);
      }
      this.closeDialog();
      
    },
  },
};
</script>

<style scoped>

  #card-categories{
    background: rgb(255, 255, 255);
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


  /*  */
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

    button{
      padding: 15px;
      border: none;
      font-weight: bold;
      background: orange;
      color: white;
      outline: none;
      width: 20%;
      border-radius: 10px;
    }
    .fa-exclamation-triangle{
      color: red;
      margin-right: 10px;
      font-size: 30px;
    }
    #ask{
      text-align: center;
    }
</style>