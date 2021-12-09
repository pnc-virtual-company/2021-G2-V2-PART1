<template> 
  <nav> 
    <ul>
      <li><h1 class="fa fa-user" style="font-size:15px">{{ username }}</h1></li>
      <li id="myevent"><router-link :to="{name: 'Home'}">Home</router-link></li> 
      <li id="myevent"><router-link :to="{name: 'MyEvent'}">My Events</router-link></li> 
      <li id="evetns"><router-link :to="{name: 'Events'}"> Find Event</router-link></li> 
      <li id="categories"><router-link :to="{name: 'Category'}">Categories</router-link></li> 
      <a id="btnlogout"><router-link :to="{name: 'SignIn'}" @click="Signout" class="fa fa-sign-out" >Sign out</router-link> </a> 
    </ul> 
  </nav>  
</template> 

<script>

  import axios from '../../axios-request.js'
  export default {
    data(){
      return{
        username: '',
        islogout: false,
      }
    },
    methods: {
      Signout(){
        localStorage.removeItem('userID');
        this.$emit('log_out', this.islogout);
      }
    },
    mounted() {
      let userid = localStorage.getItem('userID')
      axios.get("/user").then((res) =>{
        let userInfo = res.data;
        for (let user of userInfo){
          if (user.id == userid){
            this.username = user.username;
          }
        }
      })
    },
  }

</script>

<style scoped> 

  nav{
    margin-top: -11px;
    margin-left: -10px;
  }

  ul {
    list-style:none;
    background:rgb(0, 0, 0);
    overflow:hidden;
    margin:0;	
    height: 11.5vh;
    width: 97.8%;
    align-items: center;
  }

  li {
    float:left;
  }
  
  a{
    float: right;
    text-decoration: none;
    padding: 10px;
    font-size: 20px;
    margin-top: 4px;
    color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  
  li a{
    text-decoration:none;
    padding: 21px;
    color:#fff;
    margin: 8px;
    font-size:15px;
  }
  
  li h1{
    color: #fff;
    padding: -10px;
    margin: 20px;
    margin-top: 30px;
    text-transform: uppercase;
  }

  li a:hover {
    border-bottom: 8px solid #f3381f;
    margin-top: 5px;
  }

  .router-link-active{
    border-bottom: 8px solid #f3381f;
    margin-top: 5px;
  }

</style>