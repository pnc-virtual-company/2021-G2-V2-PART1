<template>
  <header>
    <nav>
      <ul>
        <li>
          <h3>Username</h3>
        </li>
        <li>
          <router-link to='/'></router-link>
        </li>
        <li>
          <router-link to='/myevent'>My events</router-link>
        </li>
        <li>
          <router-link to='/findevent'>Find Events</router-link>
        </li>
        <li>
          <router-link to='/categories'>Categories</router-link>
        </li>
        <li>
          <router-link to='/signout'><span class="glyphicon">&#xe163;</span></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    margin: auto;
    margin-top: 20px;
    width: 90%;
    height: 7rem;
    border-radius: 12px;
    background-color: #f4f4f5;
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
    font-size: 2.5rem;
  }

  a:hover,
  a:active {
    color: #0c0c0c;
    border-color: #0c0c0c;
    background-color: yellow;
  }

  span {
    font-size: 3.5rem;
  }
</style>