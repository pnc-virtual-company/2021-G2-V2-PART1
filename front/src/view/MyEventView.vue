<template>
    <section>
        <my-event-form></my-event-form>
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
    }
    
</script>

<style scoped>
  
</style>