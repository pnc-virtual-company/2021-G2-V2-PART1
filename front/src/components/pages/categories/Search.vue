<template>
    <section>
        <br>
        <div class="main-container">
            <div class="form-contain">
                <div class="txt-category-right">
                    <h1>Categories</h1>
                     <form class="search-form" @submit.prevent="search">
                        <input id="search-category" type="text" placeholder="Search..." name="search" v-model="name">
                        <button  type="submit" class="fa fa-search" id="btnSearch" style="font-size:25px; color:#fff;"></button>
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
       margin-left: 417px;
    }
    
    .txt-category-right{
        display: flex;
        align-items: center;
    }

    .txt-category-right h1{
        margin-right: -5px;
        font-size: 30px;
    }

    #search-category{
        background: rgb(218, 218, 218);
        font-size: 20px;
        height: 30px;
        padding: 15px;
        border-radius: 10px;
        outline: none;
        border: none;
        margin-left: 7%;
    }

    #btnSearch{
        height: 60px;
        width: 65px;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 15px;
        border-radius: 10px;
        background: #f3381f;
        margin-left: -7%;
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
        margin-left: 0%;
    }
    
</style>