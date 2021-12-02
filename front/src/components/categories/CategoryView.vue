<template>
  <section>
    <div>
      <search @showForm='showFormCategory'></search>
      <category-form v-if="addFormShow" :isShowForm='addFormShow' :isEdit='isEdit' @hideForm="hideCategoryForm"></category-form>
      <section>
        <category-card v-for="category of categories" :key="category.id" :category="category"></category-card>
      </section>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['categories'],
    data() {
      return {
        addFormShow: 0,
        isEdit: 0,
      }
    },
    methods: {
      showFormCategory() {
        this.addFormShow = 1;
      },
      hideCategoryForm() {
        this.addFormShow = 0;
      }
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