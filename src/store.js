const store = {
    state:{
        urlpic:'https://camt-foodapi.pair-co.com',
        loginToken:null,
        id:1,
        cart:[],
        foodId:{
            foodIds:[],
        }
    },
    ordercart(){
        this.state.foodId.foodIds = this.state.cart.map(ids=>{
            return ids.food._id
        })
    },
    setLoginToken(loginToken){
        this.state.loginToken=loginToken
    },
    addToCart(food){
        this.state.cart.push({id:this.state.id,food:food}),this.state.id++
    },
    removeFromCart(cartItem){
        const cart = []
        for (let i = 0; i < this.state.cart.length; i++) {
          const current = this.state.cart[i]
          if (cartItem.id !== current.id) {
            cart.push(current)
          }
        }
        this.state.cart = cart
    },
    removeAll(){
        for (let i = 0; i < this.state.cart.length; i++){
            this.state.cart.pop()
        }
    }
}

export default store