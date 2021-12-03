<template>
    <div>
        <router-view></router-view>
        <category-view :categories='categories'></category-view>
    </div>
    
</template>
<script>
    import axios from 'axios'
    const URL_API = "http://127.0.0.1:8000/api/"
    export default { 
        data() {
            return {
                userLists: [],
                messageError: "",
                categories: [
                  {id: 1, name: 'Sport'},
                  {id: 2, name: 'Hiking'},
                  {id: 3, name: 'Party'},
                  {id: 4, name: 'Meetingdfghjkl'},
                ]
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
  body {
    background: rgb(231, 231, 231);
  }
</style>