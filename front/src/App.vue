<template>
  <div>
    <navbar v-if="islogin" @log_out = "logout"></navbar>
    <router-view @login_user = "loginUser" @signup = "signup_user"></router-view> 
  </div> 
</template>
<script>
  import Navbar from './components/menu/Navigation.vue';
  export default {
    components: {
      'navbar': Navbar
    },
    data(){
      return{
        islogin: false,
      }
    },
    methods: {
      loginUser(action){
        this.islogin = action;
        console.log("login successfully!" + action);
      },
      signup_user(signup){
        this.islogin = signup;
      
      },
      logout(logout){
        this.islogin = logout;
        console.log("logout" + logout);
      }
    },
    mounted() {
      let user = localStorage.getItem('username');
      console.log(user);
      if(user !== null){
        this.islogin = true;
        console.log('LOGIN');
      }
      
    }
  }
</script>
<style scoped>
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: rgba(255, 255, 255, 0.856);
  }
</style>
