<template>
    <section>
        <form action="#">
            <div class="txt-category-right">
                <div class="c-txt">
                    <h1>Categories</h1>
                </div>
                <div class="searchInput">
                    <input id="search-category" type="text" placeholder="What are you looking for?"/> 
                </div>
            </div>
            <div class="add">
                <button class="btn-add" @click="showFormCategory">+ Create</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
    emit: ["showFormCategory"],
        data() {
            return {};
        },
        methods: {
            showFormCategory() {
            this.$emit("showForm");
            },
        },
    };
</script>

<style scoped>

    .txt-category-right{
        display: flex;
        width: 750px;
        margin-left: 6%;
        padding: 20px;
        margin-top: -10px;
    }

    .add{
        margin-left: 7%;
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
    .searchInput {
        margin-top: 15px;
        margin-left: 13%;
        width: 350%; 
        height: 60px;
    }
    #search-category {
        width: 135%;
        box-sizing: border-box;
        border-radius: 10px;
        border: none;
        outline: none;
        height: 10vh;
        padding: 20px;
        font-size: 20px;
    }
</style>