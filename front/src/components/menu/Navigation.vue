<template> 
  <header> 
    <nav> 
      <ul> 
        <li> 
          <h2>USERNAME</h2> 
        </li> 
        <li><router-link to='/myevents'>MY EVENTS</router-link></li> 
        <li><router-link to='/events'>EVENTS</router-link></li> 
        <li><router-link to='/category'>CATEGORIES</router-link></li> 
        <li> 
          <router-link to='/signin'>LOG OUT</router-link> 
        </li> 
      </ul> 
    </nav> 
  </header> 
</template> 
 
<style scoped> 
  
  body{
    font-family: sans-serif;
    background: rgb(218, 218, 218);
  }
  header { 
    margin: auto; 
    margin-top: 20px; 
    width: 90%; 
    height: 5rem; 
    border-radius: 12px; 
    background-color: #dddddd; 
  } 
 
  nav { 
    height: 100%; 
  } 
 
  ul { 
    list-style: none; 
    height: 100%; 
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
  } 
 
  li { 
    margin: 0 0.5rem; 
  } 
 
  a { 
    text-decoration: none; 
    background: transparent; 
    cursor: pointer; 
    color: rgb(12, 12, 12); 
    padding: 1.7rem 2rem; 
    display: inline-block; 
    font-family: Sans-serif; 
    font-size: 25px; 
  } 
 
  a:hover, 
  a:active { 
    background-color: yellow; 
    font-weight: bold;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
  } 
</style>