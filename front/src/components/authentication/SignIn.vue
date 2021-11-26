<template>
    <div class="login-page">
        <div class="start-page">
            <h1>Welcome to Event Me!</h1>
            <p id="welcome">Login to continue</p>
            <p>©Copyright by PNC 2021 VC Team 2</p>
        </div>
        <div class="form-login">
            <form action="">
                <div class="txt-signin">
                    <h2>LOGIN</h2>
                </div>
                <input type="text" placeholder="Username *"><br>
                <input type="email" placeholder="Email * "><br>
                <input type="password" placeholder="Password * ">
                <button id="signBtn">Log In</button>
                <p>- OR -</p>
                <div class="to-signup">
                    <p>Don't have account yet?</p> 
                    <a href="">Go to Sign Up</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
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
        width: 40%;             
    }

    .form-login > form > .txt-signin > h2{
        font-family: 'PT Serif', serif;
        text-align: center;
        margin-top: 35px;
        font-size: 45px;
    }

    .form-login > form > p {
        margin-top: 20px;
        margin-left: 46%;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"]{
        background: #C4C4C4;
        border-radius: 10px;
        margin-top: 20px;
        font-size: 20px;
        margin-left: 7%;
        padding: 15px;
        color: #000;
        outline: none;
        height: 30px;
        border: none;
        padding: 10;
        width: 80%;  
    }

    #signBtn{
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

    .to-signup{
        margin: 5px;
        margin-left: 25%;
        display: flex;
        width: 100%;
    }

    .form-login > form >.to-signup > p {
        color: rgb(255, 153, 0);
        margin-top: -0.1px;
    }

    .form-login > form >.to-signup > a{
        color: rgb(0, 162, 255);
        font-weight: bold;
    }

</style>