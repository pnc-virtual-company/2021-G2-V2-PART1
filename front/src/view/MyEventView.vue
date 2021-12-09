<template>
    <section>
        <div class="text-and-btn">
            <h1>My Events</h1>
            <button id="btn-add" class="fa fa-plus" @click="showCreateForm"> Create</button>
        </div>
        <my-event-form v-if="isShowForm" @hideForm="discard"></my-event-form>
        <myevent-card></myevent-card>
    </section>
</template>

<script>

    import MyeventCard from '../components/myEvent/MyEvent.vue';
    import MyEventForm from '../components/myEvent/myEventForm.vue';
    export default {
        components: {
            myeventCard: MyeventCard,
                MyEventForm,
        },
        data() {
            return {
                formMode: 'create',
                isShowForm: false,
            }
        },
        methods: {
            showCreateForm() {
                this.isShowForm = true;
                this.formMode = 'create';
                console.log(this.isShowForm)
            },
            discard() {
                this.hideForm();
            },
            hideForm() {
                this.isShowForm = false;
            }
        },
    }
    
</script>

<style scoped>

    .text-and-btn{
        margin-left: 9%;
    }

    .text-and-btn h1{
        margin-left: 0%;
        font-size: 25px;
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
    }

    #btn-add:hover{
        background: #cf240d;
    }
</style>