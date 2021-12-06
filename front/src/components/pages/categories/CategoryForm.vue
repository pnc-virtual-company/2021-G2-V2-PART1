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
        height: 20%;
        background: rgb(255, 255, 255);
        box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
        margin-left: 25%;
        border-radius: 15px;
    }

    #create-category{
       background: rgb(197, 197, 197);
       width: 94%;
       height: 40px;
       margin-left: 1.5%;
       margin-top: 10px;
       border: none;
       outline: none;
       padding: 10px;
       font-size: 20px;
       border-radius: 15px;
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