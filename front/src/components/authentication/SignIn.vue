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
                <button id="signBtn" @click="Signin">Sign In</button>
                <p>- OR -</p>
                <div class="to-signup">
                    <p>Don't have account yet?</p> 
                    <router-link to="/signup">Go to sign up</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    const URL_API = "http://127.0.0.1:8000/api/"
    export default {
        data() {
            return {
                email: "",
                password: "",
                errorMessage: "",
            };
        },
        methods: {
            Signin() {
                const login = {
                    email : this.email,
                    password : this.password,
                }
                axios.post(URL_API + "login" , login).then(res => {
                    this.$router.push('/navbar');
                    this.errorMessage = "";
                    console.log(res.data.user);
                })
                .catch(error => {
                    let statusCode = error.response.status;
                    if(statusCode === 404) {
                        this.errorMessage = 'Your input is not valid, please try again!';
                    }
                })
                this.email = "";
                this.password = "";
            }
        },
    }
</script>



<style scope>
    body{
        font-family: sans-serif;
        overflow-y: hidden;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    .login-page{
        background-image: url('images/Inkedbg_LI.jpg');
        background-position: center;
        background-size: cover;
        height: 100vh;
        display: flex;
        width: 215vh;
    }

    .start-page{
        margin-left: 7.5%;
        margin-top: 9%;
    }

    .start-page > h1{
        color: rgb(255, 153, 0);
        font-size: 50px;
    }

    .start-page > p{
        margin-left: 15%;
        font-size: 25px;
    }

    .start-page > #welcome{
        margin-left: 35%;
        font-size: 25px;
    }

    .form-login{
        box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        border-radius:20px;
        background: #fff;
        margin-left: 4%;
        margin-top: 2%;
        height: 90vh;
        width: 45%;                   
    }

    .form-login > form > .txt-signin > h2{
        color: rgb(255, 153, 0);
        text-align: center;
        margin-top: 60px;
        font-size: 40px;
    }

    .form-login > form > p {
        margin-top: 20px;
        margin-left: 47%;
    }

    .form-login > form > .form-input{
        margin-left: -7.6%;
        margin-right: 9%;
    }

    input[type="email"],
    input[type="password"]{
        background: #d1d1d1;
        border-radius: 10px;
        margin-top: 20px;
        font-size: 20px;
        padding: 15px;
        outline: none;
        height: 30px;
        border: none;
        padding: 10px;
        width: 100%;  
        margin-right: 5%;
    }

    .email,
    .password{
        margin-left: 1%;
        font-size: 15px;
        margin-top: 2%;
    }

    #sing-ip{
        text-decoration: none;
        color: #fff;
    }

    #signBtn{
        background: rgb(255, 153, 0);     
        border-radius: 10px;
        margin-top: 20px;
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
        color: rgb(255, 153, 0);
        margin-top: -0.1px;
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