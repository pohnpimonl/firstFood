<template>
  <div class="profile">
    <div class="formloginb">
      <div v-if="isLoaded">
           <div class="protop">
              <p>ข้อมูลส่วนตัว</p>
          <div>
            <img :src="$root.state.urlpic+profile.avatar" class="imgcart">
          </div>
          <div class="twobut">
            <input type="file" name="avatar" class="registerbtn" @change="onSelectFile"/>
            <button @click="upload()" class="registerbtn">เปลี่ยนรูป</button>
          </div>
           </div>
        <form @submit.prevent="editProfile">
        <div class="container">    
          <label for="firstname"><b>ชื่อ</b></label>
          <input type="text" placeholder="Enter Firstname" name="firstname" required v-model="profile.firstname"/>

          <label for="lastname"><b>นามสกุล</b></label>
          <input type="text" placeholder="Enter Lastname" name="lastname" required v-model="profile.lastname"/>

          <label for="tel"><b>เบอร์โทรศัพท์</b></label>
          <input type="tel" placeholder="Enter Tel" name="tel" required v-model="profile.phoneNumber"/>

          <div class="buttonred">
            <button type="submit" class="registerbtn">แก้ไขและบันทึก</button>
            <button type="button" class="registerbtn" @click="logoutme()">ออกจากระบบ</button>
          </div>
          <button type="button" class="registerbtn" @click="deleteme()">ลบบัญชีผู้ใช้</button>
        </div>
      </form>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
    <div class="formloginb">
      <div class="protop">
        ประวัติการสั่งซื้อ
      </div>
      <div v-if="isLoadedd">
        <div v-for="(his,i) in historyfood" :key="i" class="hiscart">
          <div v-for="(food,j) in historyfood[i].foods" :key="j">
            <div class="foodcart">
              <img :src="pichisurl + food.photo" class="imgcart"/>
              <p>{{food.name}}</p>
              <p>{{food.shopname }}</p>
              <p>{{food.price }} Baht</p>
            </div>
          </div>
      </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
const host = 'https://camt-foodapi.pair-co.com'
export default {
  data(){
    return{
      isLoaded:false,
      isLoadedd:false,
      profile:{
        firstname:'',
        lastname:'',
        phoneNumber:'',
        avatar:'',
      },
      historyfood:[{
        foods:[]
      }],
      pichisurl:'https://camt-foodapi.pair-co.com/foods/',
      file:null,
    }
  },
  mounted(){
    this.getProfile()
    this.getOrder()
    },
    methods:{
      getProfile(){
        const profileURL = `${host}/me`
        fetch(profileURL,{method:'GET',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`}})
        .then(response=>{if(response.status>=200 && response.status<300){return response.json()}else{alert('Fail')}})
        .then(data=>{this.isLoaded= true, this.profile = data})
        .catch(err=>{alert(err)})
      },
      getOrder(){
        const orderURL = `${host}/orders`
        fetch(orderURL,{method:'GET',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`}})
        .then(response=>{if(response.status>=200 && response.status<300){return response.json()}else{alert('Fail')}})
        .then(data=>{this.isLoadedd= true,this.historyfood=data})
        .catch(err=>{alert(err)})
      },
      editProfile(){
        const data={
          firstname:this.profile.firstname,
          lastname:this.profile.lastname,
          phoneNumber:this.profile.phoneNumber,
        }
        const editmeURL = `${host}/me`
        fetch(editmeURL,{method:'PUT',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`,'Content-Type':'application/json'},body:JSON.stringify(data)})
        .then(response=>{if(response.status === 204){
          alert('แก้ไขข้อมูลเรียบร้อย กรุณาเข้าสู่ระบบ')
          this.$router.push('/login')
        }})
      },
      onSelectFile(event){
        this.file= event.target.files[0]
      },
      upload(){
        const formData = new FormData()
        formData.append('avatar',this.file)
        const uploadURL = `${host}/me/avatar`
        fetch(uploadURL,{method:'PUT',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`},body:formData})
        .then(response=>{if(response.status === 204){
          alert('แก้ไขรูปเรียบร้อย กรุณาเข้าสู่ระบบ')
          this.$router.push('/login')
        }})
      },
      logoutme(){
        const logoutURL = `${host}/logout`
        fetch(logoutURL,{method:'POST',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`}})
        .then(response=>{if(response.status === 204){
          alert('ออกจากระบบแล้ว')
          this.$router.push('/login')
        }})
      },
      deleteme(){
        const deleteURL = `${host}/me`
        fetch(deleteURL,{method:'DELETE',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`}})
        .then(response=>{if(response.status === 204){
          alert('ลบบัญชีผู้ใช้แล้ว')
          this.$router.push('/login')
        }})
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
.buttonred{
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
}
.hiscart{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 16px 0;
  padding: 4px;
}
.foodcart{
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-gap: 1%;
  border: 1px solid gray;
  padding: 4px 0;
}
.protop{
  text-align: center;
}
.protop div{
  margin: 16px 0;
}
.twobut{
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
}
</style>