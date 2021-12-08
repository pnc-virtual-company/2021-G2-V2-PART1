<template> 
    <section>
        <div class="container">
            <p id="timetable">Monday, 06, December</p>
            <div id="myevent-container"> 
                <div class="event-img">
                    <img src="" alt="">
                </div>
                <div class="event-description">
                    <div class="category-name">
                        <label for="">Stay home</label>
                    </div>
                    <div class="event-title">
                        <h1>Sleep</h1>
                    </div>
                    <div class="description">
                        <label for="">have music and eat</label>
                    </div>
                </div>
                <div class="event-time">
                    <h3>01:00 PM</h3>
                </div>
                <div class="event-btn">
                    <a id="cancel" class="fa fa-times" style="font-size:20px"></a>
                    <a id="edit" class="fa fa-pencil" style="font-size:20px"></a>
                </div>
            </div> 
        </div>
    </section>
</template> 
 
<script> 

    export default {
    emit: ["showFormMyEvent"],
        data() {
            return {
                
            }
        },
        methods: {
            showFormMyEvent(){
                this.$emit("")
            }
        },

    } 
    
</script> 
 
<style scoped> 
    #timetable{
        margin-left: 20%;
    }
    #myevent-container{
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(150, 150, 150, 0.25);
        width: 60%;
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
        width: 20%;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .category-name,
    .event-title{
        margin: 23px;
        align-items: center;
        justify-content: center;
        margin-left: -10px;
    }

    .description{
        width: 100%;
        margin-left: -10px;
    }

    .event-title{
        border-radius: 5px;
        width: 100%;
        height: 7vh;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
        background: rgb(194, 194, 194);
    }

    .event-title h1{
        padding: 8px;
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
        margin-right: 10px;
    }

    #cancel{
        background: rgb(194, 194, 194);
        border: none;
        outline: none;
        height: 30px;
        width: 90px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        border-radius: 5px;
    }
    #edit{
        border: none;
        outline: none;
        color: rgb(0, 0, 0);
        cursor: pointer;
        width: 90px;
        height: 30px;
        border-radius: 5px;
        background: rgb(194, 194, 194);
    }

    #cancel:hover{
        color: rgb(255, 21, 68);
    }

    #edit:hover{
        color: rgb(9, 136, 255);
    }

</style>