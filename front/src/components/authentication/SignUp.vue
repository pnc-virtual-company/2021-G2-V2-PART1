<template>
    <div class="login-page">
        <div class="start-page">
            <h1>Welcome to Event Me!</h1>
            <p id="welcome">Sign up to continue</p>
            <p>©Copyright by PNC 2021 VC Team 2</p>
        </div>
        <div class="form-signup">
            <form action="">
                <div class="txt-signup">
                    <h2>SIGN UP</h2>
                </div>
                <div class="form-input">
                    <div class="left">
                        <input type="text" placeholder="First Name" v-model="first_name">
                        <input type="text" placeholder="Last Name" v-model="last_name">
                        <input type="number" placeholder="Phone Number" v-model="phone_number">
                    </div>
                    <div class="right">
                        <input type="email" placeholder="Email" v-model="email">
                        <input type="password" placeholder="Password" v-model="password">
                        <input type="password" placeholder="Confirm Password" v-model="confirm_password">
                    </div>
                </div>
                <button id="loginBtn" class="hvr-grow"><router-link to="#" id="sing-up">Sign Up</router-link></button>
                <p>- OR -</p>
                <div class="to-login"> 
                    <p>Already have account?  </p> 
                    <router-link to='/sigin'>Sign in</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['sing-up'],
        data() {
            return {
                first_name: '',
                last_name: '',
                phone_number: '',
                email: '',
                password: '',
                confirm_password: '',
            }
        }, 
        methods: {
            signUp(){
                this.$emit('sing-up', this.first_name, this.last_name, this.phone_number, this.email, this.password, this.confirm_password)
                this.first_name = "";
                this.last_name = "";
                this.phone_number = "";
                this.email = "";
                this.password = "";
                this.confirm_password = "";
            }
        },       
    }
</script>

<style>
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
        width: 220vh;
    }

    .start-page{
        margin-left: 6%;
        margin-top: 9%;
    }

    .start-page > h1{
        color: rgb(255, 153, 0);
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

    .form-signup{
        box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.25);
        text-align: center;
        box-sizing: border-box;
        border-radius:20px;
        background: #fff;
        margin-left: 4%;
        margin-top: 2%;
        height: 90vh;
        width: 45%;        
    }

    .form-signup > form > .txt-signup > h2{
        font-family: 'PT Serif', serif;
        color: rgb(255, 153, 0);
        text-align: center;
        margin-top: 60px;
        font-size: 40px;
    }

    .form-signup > form > p {
        margin-top: 20px;
    }

    .form-signup > form > .form-input{
        margin: 5px;
        display: flex;
        justify-content: center;

    }
    .form-signup > form > .form-input > .left, 
    .form-signup > form > .form-input > .right{
        width: 45%;
        
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="number"]{
        background: #d1d1d1;
        border-radius: 15px;
        margin-top: 15px;
        font-size: 20px;
        padding: 15px;
        outline: none;
        height: 35px;
        border: none;
        width: 80%;  
    }
    #sing-up{
        text-decoration: none;
        color: #fff;
    }
    #loginBtn{
        font-family: 'PT Serif', serif;
        background: rgb(255, 153, 0);
        justify-content: center;
        align-items: center;        
        border-radius: 15px;
        text-align: center;
        margin-top: 15px;
        cursor: pointer;
        font-size: 30px;
        outline: none;
        height: 60px;
        border: none;
        width: 40%;
    }

    .to-login{
        margin: 5px;
        margin-left: 34%;
        display: flex;
        width: 100%;
    }

    .form-signup > form >.to-login > p{
        color: rgb(255, 153, 0);
        margin-top: 0px;
        font-size: 15px;
    }
    .form-signup > form >.to-login > a{
        color: rgb(0, 162, 255);
        font-weight: bold;
        font-size: 15px;
    }

</style>