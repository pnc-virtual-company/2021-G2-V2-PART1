<template>
  <section>  
    <div class="card-categories" v-for="ctr of category" :key="ctr.id">
      <div class="c-name">
        <h2>{{ ctr.name }}</h2>
      </div>
      <div class="change" >
        <button class="edit-icon" @click="toEditCategory(ctr.id, ctr.name)">Edit</button>
        <button class="delete-icon" @click="toRemove(ctr.id)">Delete</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['category'],
  emits: ['toEdit', 'toDelete'],
  methods: {
    toEditCategory(id, name) {
      this.$emit('toEdit', id, name)
    },
    toRemove(id) {
      this.$emit('toDelete', id)
    }
  },

};
</script>

<style scoped>
  .card-categories{
    background: rgb(255, 255, 255);
    width: 50%;
    height: 60px;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    margin-left: 25%;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c-name{
    justify-content: flex-start;
  }

  .edit-icon{
    cursor: pointer;
    color: #fff;
    background: rgb(38, 252, 102);
    border: none;
    outline: none;
    width: 50px;
    height: 30px;
    margin: 10px;
    font-size: 15px;
    text-align: center;
  }
  .delete-icon{
    cursor: pointer;
    color:#fff;
    border: none;
    outline: none;
    width: 53px;
    height: 30px;
    font-size: 15px;
    background: rgb(248, 32, 32);
    text-align: center;
  }

/* // */
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
</style>