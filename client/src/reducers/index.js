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
        case "FETCH_CRYPTO": 
            return {
                ...state, 
                [action.payload.coin]: action.payload.array, 
            }
        default: 
            return state; 
    }
}