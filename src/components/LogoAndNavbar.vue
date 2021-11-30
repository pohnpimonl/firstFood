<template>
  <div>
      <div class="logo">
          <router-link to="/"><img :src="logoimg" /></router-link>
      </div>
      <div class="navmenu">
          <router-link to="/"><button>อาหาร</button></router-link>
          <router-link to="/login"><button>สมาชิก</button></router-link>
          <router-link to="/cart"><button>รายการสั่งซื้อ</button></router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            logoimg: require("../assets/logo.jpg"),
        }
    }
}
</script>

<style>
.logo {
  height: 290px;
  padding: 90px 0 10px;
  text-align: center;
}
.logo img {
  height: 100%;
  border-radius: 40%;
}
.navmenu {
  text-align: center;
}
.navmenu button{
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 20px;
}
.navmenu button:hover{
  background-color: crimson;
}
.activeMenu {
  background-color: #9a0606;
  color: white;
}
.defaultMenu {
  background-color: #eeeeee;
  color: #8f8f8f;
  border: none;
}
</style>