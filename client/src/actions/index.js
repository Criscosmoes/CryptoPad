import axios from "axios"; 


export const fetchCrypto = () => async dispatch => {


    const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=7d"); 

    console.log(response); 


}