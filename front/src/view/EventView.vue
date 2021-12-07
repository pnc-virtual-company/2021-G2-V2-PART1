<template>
    <section>
        <div>
            <event​></event​>
            <search-event></search-event>
        </div>
    </section>
</template>

<script>
    import Event from '../components/Event/Event.vue';
    import SearchEvent from '../components/Event/SearchEvent.vue';
    export default {
        components: {
            event: Event,
            'search-event': SearchEvent
        },
    }
</script>

<style scoped>
  
</style>