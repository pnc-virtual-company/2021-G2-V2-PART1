<template>
<<<<<<< HEAD
    <div>
        <router-view 
        ></router-view>
    </div>
=======
  <div>
    <category-view :categories='categories'></category-view>
  </div>
>>>>>>> Categories
</template>
<script>
<<<<<<< HEAD
    import axios from 'axios'
    const URL_API = "http://127.0.0.1:8000/api/"
    export default { 
        data() {
            return {
                userLists: [],
                messageError: "",
            }
        },
        methods: {    },
        mounted() {
            axios.get(URL_API + "user").then(res => {
                this.userLists = res.data;
            })
        },
    }    
</script>

<style scoped>

=======
export default {
  data() {
    return {
      categories: [
        {id: 1, name: 'Sport'},
        {id: 2, name: 'Hiking'},
        {id: 3, name: 'Party'},
        {id: 4, name: 'Meetingdfghjkl'},
      ]
    }
  },
}
</script>

<style>
  body {
    background: rgb(216, 216, 216);
  }
>>>>>>> Categories
</style>