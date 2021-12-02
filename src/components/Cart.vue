<template>
  <div class="formlogina">
    <div class="formloginb">
      <h5>คุณมีรายการคำสั่งซื้อในตะกร้าทั้งหมด</h5>
      <h5>{{ $root.state.cart.length }} รายการ</h5>
      <div v-for="each in $root.state.cart" :key="each.food.id" class="cartc">
      <img class="imgcart" :src="$root.state.urlpic + each.food.photo" alt="" />
      <p>{{ each.food.name }}</p>
      <p>{{ each.food.shopname }}</p>
      <p>{{ each.food.price }} Baht</p>
      <button @click="removeFromCart(each)">ลบ</button>
    </div>
    <div class="cartd">
      <h3>Total{{ total }}Baht</h3>
      <button @click="orderfood()">สั่งอาหาร</button>
    </div>
    </div>
    
  </div>
</template>

<script>
const host = 'https://camt-foodapi.pair-co.com'
import store from '../store'
export default {
  data(){
    return{
      
    }
  },
  methods: {
    removeFromCart(cartItem) {
      store.removeFromCart(cartItem)
    },
      orderfood(){
        store.ordercart()
        const orderURL = `${host}/orders`
        fetch(orderURL,{method:'POST',headers:{Authorization:`Bearer ${this.$root.state.loginToken}`,'Content-Type':'application/json'},body:JSON.stringify(store.state.foodId)})
        .then(response=>{if(response.status>=200 && response.status<300){
          alert('สั่งอาหารเรียบร้อย')
          store.removeAll()
          this.$router.push('/profile')
        }else{
          alert('รบวน เข้าสู่ระบบ หรือ สมัครสมาชิก')
          this.$router.push('/login')
        }})
      }
    },
  computed:{
    total(){
        let total = 0
        for (let i = 0; i < store.state.cart.length; i++) {
        total += store.state.cart[i].food.price
      }
        return total
    }

  },
}
</script>

<style>
.cartc {
  display: grid;
  grid-template-columns: 20% 30% 30% 10% 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 88px;
  margin: 8px 0;
  overflow: hidden;
}
.cartc button,.cartd button {
  background-color: #9a0606;
  color: white;
  padding: 14px 20px;
  margin: 0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.imgcart {
  width: 88px;
  height: 88px;
  border-radius: 50%;
}
.cartd {
  height: 108px;
  text-align: center;
}
</style>