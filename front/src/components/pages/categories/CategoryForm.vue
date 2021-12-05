<template>
    <div>
        <form action="">
            <div>
                <input id="create-category" type="text" placeholder="Event title"  v-model="categoryName"/>
                <div class="changeBtn">
                    <button class="discard" @click="discard" >DISCARD</button>
                    <button class="add" @click="create">CREATE</button>
                </div>
            </div>
        </form>
    </div>
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
                this.categoryName = ""
            },
            discard() {
                this.$emit('hideForm')
            },
        },
    }
</script>
<style scoped>
    form{
        width: 51.5%;
        height: 25%;
        background: rgb(187, 187, 187);
        margin-left: 25%;
        border-radius: 10px;
    }

    #create-category{
       background: rgb(255, 255, 255);
       width: 94%;
       height: 50px;
       margin-left: 1.5%;
       margin-top: 10px;
       border: none;
       outline: none;
       padding: 10px;
       font-size: 20px;
       border-radius: 5px;
    }

    .changeBtn{
        justify-content: flex-end;
        margin-left: 80%;
        display: flex;
    }

    .discard,
    .add{
        width: 100px;
        height: 35px;
        margin: 10px;
        padding: 10px;
    }

    .discard{
        background: rgb(243, 36, 36);
        border-radius: 5px;
        text-align: center;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
    }

    .add{
        background: rgb(36, 91, 243);
        border-radius: 5px;
        text-align: center;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
    }
</style>