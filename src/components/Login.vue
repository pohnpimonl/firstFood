<template>
  <div class="formlogina">
    <div class="formloginb">
      <form @submit.prevent="login()">
        <label for="email">อีเมลล์</label>
        <input type="email" placeholder="Your email.." v-model="username"/>

        <label for="password">รหัสผ่าน</label>
        <input type="password" placeholder="Your password.." v-model="password"/>
        <div class="formloginc">
          <router-link to="/register"><button type="button" class="registerbtn">+ สมัครสมาชิก</button></router-link>
          <button type="submit">เข้าสู่ระบบ</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import store from '../store'
const host = 'https://camt-foodapi.pair-co.com'
export default {
  data(){
    return{
      username:'poxng2@test.com',
      password:'secret',
    }
  },
  methods:{
    login(){
      const data ={
        username:this.username,
        password:this.password
      }
      const loginURL = `${host}/login`
      fetch(loginURL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      .then(response=>{
        if(response.status===401){
          alert('Username หรือ Password ผิด')
        }else{
          return response.json()
        }
      })
      .then(data=>{store.setLoginToken(data.token)
      this.$router.push('/profile')})
      .catch(error=>{console.error(error)})
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.formlogina {
  margin-top: 20px;
}
.formloginb {
  width: 560px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 50px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label {
  margin-top: 20px;
  margin-left: 12px;
}
.formloginc {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 10px;
}
.formloginc button {
  background-color: #9a0606;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 20px;
}
.formloginc button:hover {
  background-color: crimson;
}
</style>