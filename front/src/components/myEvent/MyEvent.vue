<template> 
    <section><br><br>
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
                    <div class="sd">
                        <input type="date" placeholder="Start date">
                        <input type="time">
                    </div>
                    <div class="ed">
                        <input type="date" placeholder="End date">
                        <input type="time">
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Description..."></textarea>
                </div>
                <div class="form-contain">
                    <div class="choose-img">
                        <!-- <img src="" alt=""> -->
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
        <div class="container">
            <p id="timetable">Monday, 06, December</p>
            <div class="myevent-container"> 
                <div class="event-img">
                    <img src="" alt="">
                </div>
                <div class="event-description">
                    <div class="category-name">
                        <label for="">Category</label>
                    </div>
                    <div class="event-title">
                        <h1>Travel</h1>
                    </div>
                    <div class="event-member">
                        <label for="">11 members joined</label>
                    </div>
                </div>
                <div class="event-time">
                    <h3>01:00 PM</h3>
                </div>
                <div class="event-btn">
                    <a id="cancel">CANCEL</a>
                    <a id="edit">EDIT</a>
                </div>
            </div> 
        </div>
    </section>
</template> 
 
<script> 

    export default {

    } 
    
</script> 
 
<style scoped> 

    form{
        width: 50%;
        height: 68vh;
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(223, 223, 223, 0.25);
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
        margin: 15px;
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
        background: rgb(209, 209, 209);
    }
    select{
        width: 88%;
        margin: 15px;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        margin-left: 5%;
        background: rgb(209, 209, 209);
    }

    textarea{
        width: 88%;
        height: 80px;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 5px;
        margin: 15px;
        margin-left: 5%;
        background: rgb(209, 209, 209);
    }

    input[type="date"]{
        width: 60%;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 3px;
        margin: 5px;
        background: rgb(209, 209, 209);
    }

    input[type="time"]{
        width: 60%;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 3px;
        margin: 5px;
        background: rgb(209, 209, 209);
    }
    .sd,
    .ed{
        display: flex;
        width: 90%;
        margin: 15px;
        height: 30px;
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
        margin-top: 50%;
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
        background: rgb(8, 164, 255);
        color: #fff;
    }

    .discard-btn{
        background: rgb(255, 0, 0);
        color: #fff;
    }
    /* =========================================================================================================== */

    #timetable{
        margin-left: 20%;
    }
    .myevent-container{
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(196, 196, 196, 0.25);
        width: 60%;
        height: 25vh;
        border-radius: 10px;
        margin: 15px;
        margin-left: 20%;
        display: flex;
        padding: 0px;
        box-sizing: border-box;
    }

    .event-img{
        height: 94%;
        margin: 5px;
        padding: 5px;
        width: 25%;
        background: #000;
        box-sizing: border-box;
    }

    .event-description{
        height: 100%;
        width: auto;
        margin-left: 15px;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

    }

    .category-name,
    .event-title,
    .event-member{
        margin: 23px;
        align-items: center;
        justify-content: center;
    }

    .event-time{
        margin-left: 50px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .event-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        width: 20%;
        margin-left: 100px;
    }

    .event-btn a{
        margin: 10px;
        width: 80px;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    #cancel{
        background: rgb(255, 52, 52);
        border: none;
        outline: none;
        height: 30px;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
    }
    #edit{
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
        width: 60px;
        height: 30px;
        border-radius: 5px;
        background: rgb(38, 105, 248);
    }

</style>