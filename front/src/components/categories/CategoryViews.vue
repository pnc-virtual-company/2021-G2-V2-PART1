<template>
  <div>
    <form>
      <label for="gsearch"> Categories </label>
      <input type="search" name = "gsearch" value=" &#128269;  Search ..." />
    </form> 
    <button> + Create </button>
    <div>
      <category-card
        v-for="category of categories"
        :key="category.id"
        :category="category"
      >
      </category-card>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["categories"],
};
</script>

<style scoped>
  form {
    margin-left: 200px;
    margin-top: 30px;
  }
  input { 
    margin: auto; 
    margin-top: 15px;
    margin-left: 27px;
    width: 58.5%; 
    height: 4.5rem; 
    border-radius: 15px; 
    background-color: #f4f4f5; 
    border: none; 
    outline:none;
    font-size: 2rem; 
    font-family: Sans-serif; 
  } 

  ::placeholder {
    padding: 25px;
  }

  label, ::placeholder {
    font-family: Sans-serif; 
    font-size: 2rem;
    background: transparent; 
    letter-spacing:1px
  }


  button {
    width: 8%;
    background-color: rgb(47, 177, 252);
    margin-top: 10px;
    margin-left: 200px;
    border-radius: 6px;
    padding: 5px;
    font-size: 20px;
    border: none;
  }


</style>
