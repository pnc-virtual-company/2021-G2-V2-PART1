<template>
    <section>
        <search-event></search-event>
        <event></event>
    </section>
</template>

<script>

    import axios from '../axios-request.js'
    import Event from '../components/Event/Event.vue';
    import SearchEvent from '../components/Event/SearchEvent.vue';
    export default {
      components: { Event, SearchEvent},
      data() {
        return {
          
        }
      },
    }

</script>
    
<style scoped>
  
</style>