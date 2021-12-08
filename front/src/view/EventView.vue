<template>
    <section>
        <search-event></search-event>
        <event></event>
    </section>
</template>

<script>

    import Event from '../components/Event/Event.vue';
    import SearchEvent from '../components/Event/SearchEvent.vue';
    export default {
        components: { Event, SearchEvent},
    }

</script>

<style scoped>
  
</style>