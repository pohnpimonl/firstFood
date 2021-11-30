<template>
  <div class="profile">
    <div class="formloginb">
      <form>
        <div class="container">
          <div>
            <label for="avatar"> Avatar :</label>
            <input type="file" name="avatar" />
          </div>

          <label for="firstname"><b>ชื่อ</b></label>
          <input type="text" placeholder="Enter Firstname" name="firstname" required v-model="profile.first"/>

          <label for="lastname"><b>นามสกุล</b></label>
          <input type="text" placeholder="Enter Lastname" name="lastname" required />

          <label for="tel"><b>เบอร์โทรศัพท์</b></label>
          <input type="tel" placeholder="Enter Tel" name="tel" required />

          <label for="email"><b>อีเมล</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>รหัสผ่าน</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat"><b>รหัสผ่านอีกครั้ง</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          <button type="submit" class="registerbtn">แก้ไขข้อมูล</button>
        </div>
      </form>
    </div>
    <div class="formloginb">

    </div>
  </div>
</template>

<script>
const host = 'https://camt-foodapi.pair-co.com'
export default {
  data(){
    return{
      profile:{
        firstname:'',
        lastname:'',
        phoneNumber:'',
        email:'',
        password:'',
        avatar:'',
      }
    }
  },
  mounted(){
    const profileURL = `${host}/me`
    fetch(profileURL,{method:'GET',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`},'Content-Type':'application.json'})
    .then(response=>{if(response.status>=200 && response.status<300){return response.json()}else{alert('Fail')}})
    .then(profile=>{this.profile = profile})
    .catch(err=>{alert(err)})
    },
    methods:{
      getProfile(){

      }
    }
}
</script>

<style>
.profile {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 4px;
}
</style>