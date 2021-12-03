<template>
    <form action="" class="create-category-form">
        <div>
            <br>
            <input class="txt-input-category" type="text" placeholder="Event category"  v-model="categoryName"/>
        </div>
        <div class="actionBtn">
            <button class="discard" @click="discard" >DISCARD</button>
            <button class="add" @click="create" v-if="!isEdit">CREATE</button>
        </div>
    </form>
</template>
<script>
    export default {
        emit: ['create', 'cancel'],
        props: ['isShowForm', 'isEditing'],
        data() {
            return {
            categoryName: '',
            }
        },
        methods: {
            create() {
            this.$emit('addCategory', this.categoryName);
            },
            discard() {
            this.$emit('hideForm')
            }
        },
    }
</script>
<style scoped>

    .create-category-form{
        width: 688px;
        height: 22vh;
        background: rgb(255, 255, 255);
        margin-left: 25%;
        border-radius: 10px;
        margin-top: -50px;
        box-sizing: border-box;
    }

    .txt-input-category{
        border-radius: 10px;
        width: 92.5%;
        height: 40px;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 25px;
        margin-left: 2%;
        margin-top: 2%;
        border: none;
        outline: none;
        padding: 10px;
        font-size: 20px;
        background: rgb(201, 201, 201);
    }
    .actionBtn{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: -25px;
        margin-right: 1%;
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