<template>
  <div id="app">
    <nav class="nav d-flex flex-wrap">
      <router-link to="/"><img class="img" src="./assets/img/logo.png" alt="logo"></router-link>
      <span class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Sobre</router-link>
      </span>
    </nav>
    
    <div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>


export default {


}
</script>

<style>
@font-face {
  font-family: bernadette;
  src: url('./assets/font/bernadette.ttf');
}

#app {
  font-family: bernadette;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 70px;
}


.nav {
  padding: 10px;
  background-color: #00d8ff;
}

.nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 15px;
}

.menu {
  margin: auto 0;
  font-size: 20px;
}

.nav a.router-link-exact-active {
  color: #2c3e50;
}

</style>
