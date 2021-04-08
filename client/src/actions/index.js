import axios from "axios"; 


export const fetchCrypto = (UUID, coin) => async dispatch => {


    const response = await axios.post("/api/send", {
        id: UUID, 
    })

    const filteredDays = []; 

    for (let i = 0; i < response.data.data.history.length; i+=3){
        filteredDays.push(response.data.data.history[i])
    }

    console.log(filteredDays);
    
    dispatch({type: "FETCH_CRYPTO", payload: {coin, array: filteredDays}})
   
}

