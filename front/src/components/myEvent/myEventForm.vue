<template>
    <section>
        <div class="myevent-container">
            <div class="text-and-btn">
                <h1>My Events</h1>
                <button id="btn-add" @click="showFormCategory" class="fa fa-plus"> Create</button>
            </div>
            <form action="">
                <div class="form-container">
                    <div class="form-input">
                        <label for="">CREATE AN EVENT</label><br>
                        <input type="text" placeholder="Title"><br>
                        <select name="cars" id="cars">
                            <option value="volvo">Travel</option>
                            <option value="saab">Hiking</option>
                            <option value="mercedes">Camping</option>
                            <option value="audi">Sleep at home</option>
                        </select><br>
                        <select name="cars" id="cars">
                            <option value="volvo">Cambodia</option>
                            <option value="saab">Thai</option>
                            <option value="mercedes">Vietnam</option>
                            <option value="audi">China</option>
                        </select><br>
                        <div class="date-and-time">
                            <input type="datetime-local" placeholder="Start date">
                            <input type="datetime-local" placeholder="End date">
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description..."></textarea>
                    </div>
                    <div class="form-contain">
                        <div class="choose-img">
                            <label for="up" class="btn btn-primary">
                                <img src="../../assets/gallery-icon.png" alt="" style=" width: 130%; margin-left: -13%; cursor: pointer;">
                            </label>
                            <div>
                                <input type="file" ref="file" id="up" @change = "getImage" hidden>
                            </div>
                        </div>
                        <div></div>
                        <div class="form-btn">
                            <button class="discard-btn">DISCARD</button>
                            <button class="submit-btn">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .myevent-container{
        width: 100%;
    }
    .text-and-btn{
        margin-left: 10%;
    }

    .text-and-btn h1{
        margin-left: 0.5%;
        font-size: 25px;
    }
    #btn-add {
        background: #f3381f;
        color: #fff;
        width: 130px;
        height: 50px;
        font-size: 25px;
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
    }

    form{
        width: 50%;
        height: 62vh;
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(158, 158, 158, 0.25);
        margin-left: 25%;
        border-radius: 10px;
    }

    form .form-container{
        display:flex;
        box-sizing: border-box;
    }

    .form-input{
        margin-top: 10px;
        width: 60%;
        height: 100%;
    }

    .form-contain{
        width: 40%;
        height: 68vh;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    label{
        width: 100%;
        margin-top: 10px;
        margin: 20px;
        font-weight: bold;
    }

    input[type="text"]{
        width: 85%;
        margin: 15px;
        height: 30px;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        margin-left: 5%;
        font-size: 15px;
        background: rgb(209, 209, 209);
    }
    select{
        width: 88%;
        margin: 15px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        margin-left: 5%;
        font-size: 15px;
        background: rgb(209, 209, 209);
    }

    textarea{
        width: 88%;
        height: 70px;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        margin: 15px;
        margin-left: 5%;
        font-size: 15px;
        background: rgb(209, 209, 209);
    }

    .date-and-time{
        display: flex;
    }

    input[type="datetime-local"]{
        background: rgb(209, 209, 209);
        width: 40.5%;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 3px;
        margin: 5px;
        margin-left: 5%;
        font-size: 15px;
        
    }

    .choose-img{
        width: 80%;
        height: 37%;
        align-items: center;
        justify-content: center;
        display: flex;
        margin-left: 5%;
        margin-top: 40px;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .form-btn{
        margin-top: 35%;
        margin-left: -8%;
    }

    .submit-btn,
    .discard-btn{
        width: 80px;
        height: 30px;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 5px;
    }

    .submit-btn{
        background: rgb(20, 153, 255);
        color: #fff;
    }

    .discard-btn{
        background: rgb(255, 0, 0);
        color: #fff;
    }
</style>