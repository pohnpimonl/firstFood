<template>
  <div class="main">
    <logo-and-navbar/>
    <router-view/>
  </div>
</template>

<script>
import LogoAndNavbar from './components/LogoAndNavbar.vue'
export default {
  components:{
    LogoAndNavbar,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: "Prompt", sans-serif;
}
body {
  background: linear-gradient( rgba(255, 255, 255, 0.75),rgba(255, 255, 255, 0.75)),url("./assets/bg.jpg");
  background-size: auto;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
}
.main {
  width: 1180px;
  margin-left: auto;
  margin-right: auto;
}
</style>