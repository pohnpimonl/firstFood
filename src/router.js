import VueRouter from 'vue-router'
// import Cart from './components/Cart.vue'
// import List from './components/List.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'


const routes=[
    {path:'/cart',component: Profile},
    {path:'/',component: Register},
    {path:'/login',component: Login},
    // {path:'/register',component: Register},
]

const router = new VueRouter({
    routes:routes,
    mode:'history',
})

export default router