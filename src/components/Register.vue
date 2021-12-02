<template>
  <div class="formlogina">
    <div class="formloginb">
      <form @submit.prevent="register()">
        <div class="container">
          <div>
            <label for="avatar"> Avatar :</label>
            <input type="file" name="avatar" @change="addAvatar"/>
          </div>

          <label for="firstname"><b>ชื่อ</b></label>
          <input type="text" placeholder="Enter Firstname" name="firstname" v-model="form.firstname" required />

          <label for="lastname"><b>นามสกุล</b></label>
          <input type="text" placeholder="Enter Lastname" name="lastname" v-model="form.lastname" required />

          <label for="tel"><b>เบอร์โทรศัพท์</b></label>
          <input type="tel" placeholder="Enter Tel" name="tel" v-model="form.phoneNumber" required />

          <label for="email"><b>อีเมล</b></label>
          <input type="email" placeholder="Enter Email" name="email" v-model="form.email" required />

          <label for="psw"><b>รหัสผ่าน</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat"><b>รหัสผ่านอีกครั้ง</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" v-model="form.password" required />

          <button type="submit" class="registerbtn">สมัครสมาชิก</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const host = 'https://camt-foodapi.pair-co.com'
export default {
  data(){
    return{
      form:{
        firstname:'',
        lastname:'',
        phoneNumber:'',
        email:'',
        password:'',
        avatar:null,
      }
    }
  },
  methods:{
    register() {
      const formData = new FormData()
      formData.append('firstname', this.form.firstname)
      formData.append('lastname', this.form.lastname)
      formData.append('phoneNumber', this.form.phoneNumber)
      formData.append('email', this.form.email)
      formData.append('password', this.form.password)
      formData.append('avatar', this.form.avatar)
      const registerURL = `${host}/register`
      fetch(registerURL, {method: 'POST',body: formData})
      .then(response => {if (response.status >= 200 && response.status < 300) {alert('สมัครสมาชิกเรียบร้อยแล้ว กรุณาเข้าสู่ระบบ')} else {alert('fail')}
      this.$router.push('/login')})
      .catch(err => {alert(err)})
    },
    addAvatar(event) {
      this.form.avatar = event.target.files[0]
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  padding: 16px;
}

input[type="text"],
input[type="tel"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  border-radius: 6px;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="tel"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #9a0606;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}
</style>