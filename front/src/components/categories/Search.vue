<template>
    <section>
        <div class="main-container">
            <div class="form-contain">
                <div class="txt-category-right">
                    <h1>Categories</h1>
                    <form class="search-form" @submit.prevent="" action="#">
                        <input  @keyup="search" id="search-category" name="search" v-model="name" type="text" placeholder="Search...">
                        <button type="submit" @click="clear" class="fa fa-close"></button>
                    </form>
                </div>
                <div class="add">
                    <button id="btn-add" @click="showFormCategory" class="fa fa-plus"> Create</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    emit: ["showFormCategory", "addName"],
        data() {
            return {
                name: ''
            };
        },
        methods: {
            showFormCategory() {
                this.$emit("showForm");
            },
            search(){
                this.$emit('addName', this.name);
            },
            clear(){
                this.name = "";
            }
        },
    };
</script>

<style scoped>

    .main-container{
        margin: auto;
        width: 80%;
    }

    .form-contain{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .search-form{
       display: flex;
       margin-left: 46.5%;
    }
    
    .txt-category-right{
        display: flex;
        align-items: center;
        margin-left: 1%;
    }

    .txt-category-right h1{
        font-size: 25px;
        margin-left: -2%;
    }
    
    #btn-add {
        background: #f3381f;
        color: #fff;
        width: 130px;
        height: 50px;
        font-size: 25px;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: -1%;
    }

    #btn-add:hover{
        background: #cf240d;
    }

    input[type="text"]{
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(150, 150, 150, 0.25);
        border-radius: 5px;
        font-size: 18px;
        height: 50px;
        padding: 8px;
        width: 160%;
        margin: 5px;
        box-sizing: border-box;
        display: flex;
        outline: none;
        border: none;
    }

    button{
        background: #f3381f;
        font-size:25px; 
        color:rgb(255, 255, 255); 
        box-shadow: 0px 2px 8px 2px rgba(150, 150, 150, 0.25);
        height: 50px; 
        margin-top: 5px; 
        width: 35%;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        background: #cf240d;
    }
    
</style>