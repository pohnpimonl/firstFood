<template>
  <div>
    <div class="foodListrecommends">
      <div v-for="food in foodList.recommends" :key="food.id">
        <div class="imgrecom">
          <img :src="$root.state.urlpic+food.photo" alt="" class="menuimg" />
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
          <img :src="$root.state.urlpic+food.photo" alt="" class="menuimg" />
        </div>
        <div class="titlerest">
          <p>{{ food.name }}</p>
          <p>{{ food.shopname }}</p>
          <p>{{ food.price }} Baht</p>
          <button class="registerbtn" @click="addToCart(food)">+ เพิ่ม</button>
       </div>
      </div>
    </div>
    <div class="buttonpage">
      <button v-for="index in (total / limit)" :key="index" @click="onChangePage(index)" class="butpage">
        {{index}}
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  data() {
    return {
      foods: [],
      pageNumber:1,
      limit:10,
      total:0,
      plusimg: require("../assets/plus.png"),
    };
  },
  mounted() {
    this.getFood()
  },
  computed: {
    foodList() {
      const recommends = [];
      const rest = [];
      for (let i = 0; i < this.foods.length; i++) {
        if (i <= 1) {
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
    getFood(){
    const listURL = `${host}?limit=${this.limit}&offset=${this.pageNumber-1}`;
    fetch(listURL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.foods = data.data
        this.total = data.total
      })
    },
    addToCart(food) {
      store.addToCart(food)
    },
    onChangePage(pageNumber){
      this.pageNumber=pageNumber
      this.getFood()
    }
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
  cursor: pointer;
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
  background-color: #9a0606;
  border: none;
  border-radius: 4px;
  padding: 4px 0;
  color: #fff;
  width: 100%;
  cursor: pointer;
}
.buttonpage{
  text-align: center;
}
.butpage{
  background-color: #9a0606;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 16px;
  color: #fff;
  cursor: pointer;
}
</style>