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
                        <div> 
                            <label for="username" class="username">Username</label><br>
                            <input type="text" id="username" v-model="username">
                        </div><br>
                        
                        <div>
                            <label for="email" class="email">Email</label>
                            <input type="text" id="email" v-model="email">
                        </div>
                    </div>
                    <div class="right">
                        <div>
                            <label for="password" class="password">Password</label><br>
                            <input type="password" id="password" v-model="password">
                        </div><br>
                        <div >
                            <label for="c-password" class="c-password">Confirm Password</label><br>
                            <input type="password" id="c-password" v-model="confirm_password">
                        </div>
                        
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
                username: 'Den Li',
                email: 'lyden@gmail.com',
                password: '!@#$%^&*()',
                confirm_password: '!@#$%^&*()',
            }
        }, 
        methods: {
            signUp(){
                this.$emit('sing-up', this.username, this.email, this.password, this.confirm_password)
                this.username = "";
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
        box-sizing: border-box;
        border-radius:20px;
        background: #fff;
        margin-left: 4%;
        margin-top: 2%;
        height: 90vh;
        width: 45%;        
    }

    .form-signup > form > .txt-signup > h2{
        color: rgb(255, 153, 0);
        text-align: center;
        margin-top: 60px;
        font-size: 40px;
    }

    .form-signup > form > p {
        margin-top: 20px;
        margin-left: 47%;
    }

    .form-signup > form > .form-input{
        margin: 5px;
        display: flex;

    }
    .form-signup > form > .form-input > .left, 
    .form-signup > form > .form-input > .right{
        width: 45%;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"]{
        background: #d1d1d1;
        border-radius: 10px;
        margin-top: 15px;
        font-size: 20px;
        padding: 15px;
        outline: none;
        height: 35px;
        border: none;
        width: 82%;  
        margin-left: 4%;
    }

    #username,
    #email,
    #password,
    #c-password{
        font-size: 20px;
        margin-left: 15%;
        margin-top: 0%;
    }

    .username,
    .email,
    .password,
    .c-password{
        margin-left: 15%;
        font-size: 20px;
    }

    #sing-up{
        text-decoration: none;
        color: #fff;
    }
    
    #loginBtn{
        background: rgb(255, 153, 0);       
        border-radius: 15px;
        margin-top: 15px;
        cursor: pointer;
        font-size: 30px;
        outline: none;
        height: 60px;
        border: none;
        width: 40%;
        margin-left: 31%;
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