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
                        <input type="text" placeholder="First Name">
                        <input type="text" placeholder="Last Name">
                        <input type="number" placeholder="Phone Number">
                    </div>
                    <div class="right">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <input type="password" placeholder="Confirm Password">
                    </div>
                </div>
                <button id="loginBtn" class="hvr-grow">Sign Up</button>
                <p>- OR -</p>
                <div class="to-login"> 
                    <a href="">Log In</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
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
        margin-left: 3%;
        margin-top: 2%;
        height: 90vh;
        width: 50%;             
    }

    .form-signup > form > .txt-signup > h2{
        font-family: 'PT Serif', serif;
        text-align: center;
        margin-top: 35px;
        font-size: 45px;
    }

    .form-signup > form > p {
        margin-top: 20px;
        margin-left: 46%;
    }

    .form-signup > form > .form-input{
        display: flex;
        margin: 5px;
        box-sizing: border-box;

    }
    .form-signup > form > .form-input > .left, .right{
        margin-right: 2%;
        margin-left: 1%;
    }
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="password"]{
        background: #C4C4C4;
        border-radius: 10px;
        margin-top: 15px;
        font-size: 20px;
        margin-left: 7%;
        padding: 15px;
        color: #000;
        outline: none;
        height: 30px;
        border: none;
        width: 80%;  
    }

    #loginBtn{
        font-family: 'PT Serif', serif;
        background: rgb(255, 153, 0);
         justify-content: center;
        align-items: center;        
        border-radius: 10px;
        text-align: center;
        margin-top: 20px;
        cursor: pointer;
        margin-left:30%;
        font-size: 30px;
        outline: none;
        color: #fff;
        height: 50px;
        border: none;
        width: 40%;
    }

    .to-login{
        margin: 5px;
        margin-left: 46%;
        width: 100%;
    }

    .form-signup > form >.to-login > a{
        color: rgb(0, 162, 255);
        font-weight: bold;
    }

</style>