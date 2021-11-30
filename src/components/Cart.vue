<template>
    <div class="formlogina">
    <div class="formloginb">
        <h5>คุณมีรายการคำสั่งซื้อในตะกร้าทั้งหมด</h5>
      <h5>{{ PCartp.length }} รายการ</h5>
    </div>
    <div v-for="each in PCartp" :key="each.food.id" class="cartc">
        <img class="imgcart" :src="picfoods+each.food.photo" alt="" />
        <p>{{ each.food.name }}</p>
        <p>{{ each.food.shopname }}</p>
        <p>{{ each.food.price }} Baht</p>
        <button @click="removeFromCart(each)">ลบ</button>
    </div>
    <div class="cartd">
      <h3>Total{{ total }}Baht</h3>
      <button type="submit">สั่งอาหาร</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>