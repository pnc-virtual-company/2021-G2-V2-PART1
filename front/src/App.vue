<template>
    <div>
        <router-view 
        ></router-view>
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

</style>