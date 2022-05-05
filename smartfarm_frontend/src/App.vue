<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'Project'}">Project</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-image: url("./assets/smartfarm 768.jpg");
  height: 648px;
  font-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: rgb(10, 23, 65);
  font-size: 50px;
  height:100px;
}
h2{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: rgb(11, 27, 92);
  font-weight: bold;
  font-size: 30px;
  height:10px;
}
h3{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 20px;
  height:15px;
}
p{
  font-family: 'Times New Roman', Times, serif;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 20px;
  height:50px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #020202;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: rgb(38, 202, 38);
}
</style>
