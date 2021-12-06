<template>
    <div class="login-page">
        <div class="start-page">
            <h1>Welcome to Event Me!</h1>
            <p id="welcome">Login to continue</p>
            <p>©Copyright by PNC 2021 VC Team 2</p>
        </div>
        <div class="form-login">
            <form @submit.prevent="" action="#">
                <div class="txt-signin">
                    <h2>SIGN IN</h2>
                </div>
                <div class="form-input">
                     <div>
                        <label for="email" class="email">Email</label><br>
                        <input type="email" id="email" v-model="email">
                    </div><br>
                    <div>
                        <label for="password" class="password">Password</label><br>
                        <input type="password" id="password" v-model="password">
                    </div>
                </div>
                <div class="error">
                    <p>{{errorMessage}}</p>
                </div>
                <button id="signBtn" @click="Signin" class="hvr-grow">Sign In</button>
                <p>- OR -</p>
                <div class="to-signup">
                    <p>Don't have account yet?</p> 
                    <router-link :to="{name:'SignUp'}">Go to sign up</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    const URL_API = "http://127.0.0.1:8000/api/"
    export default {
        emits: ['login_user'],
        data() {
            return {
                email: "",
                password: "",
                errorMessage: "",
                username: "",
                userlogin: true,
            };
        },
        methods: {
            Signin() {
                const login = {
                    email : this.email,
                    password : this.password,
                }
                axios.post(URL_API + "login" , login).then(res => {
                    localStorage.setItem('userID', res.data.data.id);
                    this.$router.push('/myEvents');
                    this.errorMessage = "";
                    this.$emit('login_user', this.userlogin)
                    console.log(res.data);
                })
                .catch(error => {
                    let statusCode = error.response.status;
                    if(statusCode === 404) {
                        this.errorMessage = 'Your input is not valid, please try again!';
                    }
                })
                this.email = "";
                this.password = "";
            },
        },
        mounted() {
        },
    }
    
</script>
<style scoped>

    .login-page{
        height: 98.6vh;
        width: 216vh;
        margin-top: -7px;
        margin-left: -1%;
        background-image: url('images/Inkedbg_LI.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .start-page{
        margin-left: 6%;
        margin-top: 9%;
    }

    .start-page > h1{
        color: rgb(255, 174, 0);
        margin-left: -3%;
        font-size: 50px;
    }

    .start-page > p{
         margin-left: 5%;
        font-size: 25px;
    }

    .start-page > #welcome{
         margin-left: 25%;
        font-size: 25px;
    }

    .form-login{
        box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        border-radius:20px;
        background: #fff;
        margin-top: 4%;
        height: 80vh;
        width: 40%;
        margin-left: 4%; 
    }

    .form-login > form > .txt-signin > h2{
        color: #f8a917;
        text-align: center;
        margin-top: 60px;
        font-size: 40px;
    }

    .form-login > form > p {
        margin-top: 20px;
        margin-left: 47%;
    }
    
    .form-login > form > .form-input{
        margin: 5px;
    }

    input[type="email"],
    input[type="password"]{
        background: #d1d1d1;
        border-radius: 10px;
        margin-top: 15px;
        font-size: 20px;
        padding: 15px;
        outline: none;
        height: 20px;
        border: none;
        width: 81.7%;  
        margin-left: 7%;
    }

    .email,
    .password{
        margin-left: 7%;
        font-size: 15px;
    }

    #email,
    #password{
        font-size: 20px;
        margin-top: 0%;
    }

    #sing-ip{
        text-decoration: none;
        color: #fff;
    }

    #signBtn{
        background: #f8a917;     
        border-radius: 10px;
        margin-top: 15px;
        cursor: pointer;
        font-size: 30px;
        outline: none;
        height: 60px;
        color: #fff;
        border: none;
        width: 40%;
        margin-left: 31%;
    }

    .to-signup{
        justify-content: center;
        display: flex;
        margin: 5px;
        width: 100%;
    }

    .form-login > form >.to-signup > p {
        color: #f8a917;
        margin-top: 0px;
        font-size: 15px;
    }

    .form-login > form >.to-signup > a{
        color: rgb(0, 162, 255);
        font-weight: bold;
        font-size: 15px;
    }

    .error{
        text-align: center;
        color: red;
    }

</style>