const store = {
    state:{
        loginToken:null,
    },
    setLoginToken(loginToken){
        this.state.loginToken=loginToken
    }
}

export default store