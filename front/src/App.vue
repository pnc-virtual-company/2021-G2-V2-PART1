<template>
  <div>
    <navbar v-if="islogin" @log_out="logout"></navbar>
    <router-view @login_user="loginUser" @signup="signup_user"></router-view> 
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
      let user = localStorage.getItem('userdata');
      console.log(user);
      if(user !== null){
        this.islogin = true;
        console.log('LOGIN');
      }else{
        this.islogin = false;
      }
    }
  }
</script>
<style>

  body{
    background: rgb(255, 255, 255);
  }
  
</style>