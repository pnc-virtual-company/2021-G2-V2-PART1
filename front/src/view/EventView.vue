<template>
    <section>
        <search-event></search-event>
        <event :allEventList="allEvents"></event>
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
          allEvents: [],  
          url: "http://127.0.0.1:8000/storage/images/",
        }
      },
      methods: {
        getEvents(){
          axios.get('/myevents').then(res =>{
            let userID = localStorage.getItem('userID');
            for(let event of res.data){
              if (event.user_id != userID){
                console.log(event);
                this.allEvents.unshift(event);
              }
            }  
          });
        }
      },
      mounted() {
        this.getEvents();
      },
    }

</script>
    
<style scoped>
  
</style>