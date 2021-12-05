<template> 
  <nav> 
    <ul> 
      <li> 
        <p class="fa fa-user" style="font-size:20px" > {{username}}</p> 
      </li> 
      <li id="myevent"><router-link :to="{name: 'MyEvent'}">MY EVENTS</router-link></li> 
      <li id="evetns"><router-link :to="{name: 'Event'}">EVENTS</router-link></li> 
      <li id="categories"><router-link :to="{name: 'Category'}">CATEGORIES</router-link></li> 
      <li id="btnlogout"><router-link :to="{name: 'SignIn'}" class="fa fa-sign-out" @click="Signout"></router-link> </li> 
    </ul> 
  </nav>  
</template> 

<script>
  export default {
    data(){
      return{
        username: '',
        islogout: false,
      }
    },
    methods: {
      Signout(){
        localStorage.removeItem('username');
        this.$emit('log_out', this.islogout);
      }
    },
    mounted() {
      this.username = localStorage.getItem('username');
    },
  }
</script>

<style scoped> 
  
  nav { 
    width: 92%;
    height: 4.5rem;
    background: rgb(197, 197, 197);
    align-items: center;
    justify-content: space-around;
    margin-left: 4%;
    margin-top: 5px;
    border-radius: 15px;
  } 
 
  nav > ul { 
    list-style: none; 
    display: flex; 
    align-items: center; 
    margin: 15px;
  } 
  
  nav > ul > li{
    margin: 10px;
    font-weight: bold;
  }

   li > a{
    text-decoration: none;
    color: rgb(0, 0, 0);
  }

   li > p { 
    color: rgb(0, 0, 0); 
    font-size: 18px;
  }

  nav > ul > #btnlogout{
    margin-left: 60%;
    color: #fff;
    font-size: 40px;
  }
</style>