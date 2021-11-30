<template>
  <div>
    <div class="foodListrecommends">
      <div v-for="food in foodList.recommends" :key="food.id">
        <div class="imgrecom">
          <img :src="picfoods+food.photo" alt="" class="menuimg" />
        </div>
        <div class="titlerecom">
          <p>{{ food.name }}</p>
          <p>{{ food.price }} Baht</p>
          <button @click="addToCart(food)"><img :src="plusimg" /></button>
          <p>{{ food.shopname }}</p>
        </div>
      </div>
    </div>
    <div class="foodListrest">
      <div v-for="food in foodList.rest" :key="food.id">
        <div class="imgrest">
          <img :src="picfoods+food.photo" alt="" class="menuimg" />
        </div>
        <div class="titlerest">
          <p>{{ food.name }}</p>
          <p>{{ food.shopname }}</p>
          <p>{{ food.price }} Baht</p>
          <button @click="addToCart(food)">+ เพิ่ม</button>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [],
      plusimg: require("../assets/plus.png"),
      picfoods: "https://camt-foodapi.pair-co.com",
    };
  },
  mounted() {
    const listURL = `${host}`;
    fetch(listURL, { method: "GET" })
      .then((response) => response.json())
      .then((foodsData) => {
        this.foods = foodsData;
      });
  },
  computed: {
    foodList() {
      const recommends = [];
      const rest = [];
      for (let i = 0; i < this.foods.length; i++) {
        if (i <= 3) {
          recommends.push(this.foods[i]);
        } else {
          rest.push(this.foods[i]);
        }
      }
      return {
        recommends: recommends,
        rest: rest,
      };
    },
  },
  methods: {
    addToCart(food) {
      this.$emit("add:tocart", food);
    },
  },
};
const host = "https://camt-foodapi.pair-co.com/foods/";
</script>

<style>
.foodListrecommends {
  display: grid;
  grid-template-columns: 50% 50%;
}
.imgrecom, .imgrest{
  height: 304px;
  margin: 0 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.imgrecom img, .imgrest img{
  width: 100%;
}
.titlerecom{
  background-color: #fff;
  margin: 0 16px 16px;
  padding: 16px;
  display: grid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  grid-template-columns: 50% 40% 10%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.titlerecom img{
  width: 80%;
}
.titlerecom button{
  background-color: #fff;
  border: none;
}
.foodListrest {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.titlerest{
  background-color: #fff;
  margin: 0 16px 16px;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.titlerest button{
  background-color: #fff;
  border-color: red;
  color: red;
  width: 100%;
}
</style>