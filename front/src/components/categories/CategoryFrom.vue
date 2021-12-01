<template>
    <form action="#">
        <div>
          <input type="text" placeholder="Event category"  autofocus/>
        </div>
        <div class="actionBtn">
            <button @click="discard" class="discard">Discard</button>
            <button @click="add" class="add">Add Category</button>
        </div>
    </form>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    form {
        margin: 2rem auto;
        max-width: 40rem;
        padding: 1rem;
        border-radius: 12px;
        background: rgb(206, 206, 206);
        height: 20vh;
        width: 500px;
    }

    form div {
        margin: 1rem 0;
    }

    input {
        padding: 0.6rem;
        width: 98.5%;
        box-sizing: border-box;
        border-radius: 10px;
        border: none;
        outline: none;
        height: 10vh;
    }
    label {
        margin-right: 1rem;
        width: 7rem;
        display: inline-block;
        color: #777;
        font-size: 15px;
        padding: 10px 0;
    }
    ::placeholder {
        letter-spacing:1px
    }
    .actionBtn{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: -10px;
    }
    .discard,
    .add{
        width: 100px;
        height: 30px;
        border: none;
        outline: none;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .discard{
        background: rgb(248, 16, 16);
        color: #fff;
    }
    .add{
        background: rgb(14, 243, 82);
        color: #fff;
    }
</style>