<template>
    <section>
            <div class="txt-category-right">
                <div class="c-txt">
                    <h1>Categories</h1>
                </div>
               
                <form class="example" @submit.prevent="search">
                    <input type="text" placeholder="Search.." name="search" v-model="name">
                    <button  type="submit" class="fa fa-search" id="btnSearch"></button>
                </form>
            </div>
            <div class="add">
                <button class="btn-add" @click="showFormCategory">+ Create</button>
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
            }
        },
    };
</script>

<style scoped>

    .txt-category-right{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: auto;
        margin-left: 7%;
    }

    .add{
        margin-left: 7%;
    }
    .c-txt {
        width: 30%;
    }
    .c-txt > h1{
        font-size: 30px;
    }
    .btn-add {
        background: rgb(34, 120, 250);
        color: #fff;
        width: 150px;
        height: 50px;
        font-size: 20px;
        border: none;
        outline: none;
        border-radius: 10px;
    }
    .example{
        display: flex;
        width: 80%;
        align-items: center;
    }
    form.example input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 50%;
    background: #f1f1f1;
    }

    form.example button {
    float: left;
    width: 5%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    }

    form.example button:hover {
    background: #0b7dda;
    }

    form.example::after {
    content: "";
    clear: both;
    display: table;
    }
    #btnSearch{
        height: 6.5vh;
    }
</style>