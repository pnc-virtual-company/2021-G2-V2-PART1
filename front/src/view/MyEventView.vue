<template>
    <div>
        <my-event-card class="event-card"></my-event-card>
        <my-event></my-event>
    </div>
</template>

<script>
    import Myevents from '../components/myEvent/myEventForm.vue';
    import MyeventCard from '../components/myEvent/MyEvent.vue';
    export default {
        components: {
            myevents: Myevents,
            myeventCard: MyeventCard
        },
    }
</script>

<style scoped>
  
</style>