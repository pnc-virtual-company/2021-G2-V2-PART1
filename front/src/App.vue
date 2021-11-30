<template>
    <div>
        <router-view 
        @sign-up="createUser"
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
        methods: {
            createUser(username, email, password) {
                const newUser = {
                    username: username,
                    email: email,
                    password: password,
                }
                console.log(newUser)
                if (username != "" && email != "" && password != ""){
                    axios.post(URL_API + "register",newUser).then(res => {
                    this.userLists.push(res.data.data);
                        console.log(this.userLists)
                    })
                }else{
                    console.log("Input in not valid!!!")
                }
            }
        },
        mounted() {
            axios.get(URL_API + "user").then(res => {
                this.userLists = res.data;
                console.log(this.userLists);
            })
        },
    }    
</script>

<style scoped>

</style>