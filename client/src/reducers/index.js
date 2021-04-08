const initialState = {
    currentUser: {
        id: "", 
        username: ""
    }, 
    coins: {
        btc: [], 
        ltc: [], 
        eth: [], 
        search: [], 
    }
}


export default (state = initialState, action) => {



    switch(action.type) {
        default: 
            return state; 
    }
}