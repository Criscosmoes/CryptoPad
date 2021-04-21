import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import axios from "axios"; 

const StyledLineGraph = styled.div`
  & {
    border: 2px solid black;
    margin: 3%
  }

  h2 {
    font-size: 4rem; 
  }



`;

const LineGraph = ({nameOfCoin, coinId}) => {

  const [priceList, setPriceList] = useState([]);
  const [timeList, setTimeList] = useState([]); 
  const [max, setMax] = useState(0); 
  const [min, setMin] = useState(0); 

  // func to make our returned prices into actual readable prices
  function numberWithCommas(x) {
  
    let y = parseInt(x); 
  
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // func to turn timestamp to dates
  function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = month + " " + date
    return time;
  }
  

  useEffect(async () => {

    // make axios call
    const response = await axios.post("/api/send", {id: coinId})


    // filter data out
    const filteredDays = []; 

    for (let i = 0; i < response.data.data.history.length; i+=5){
        filteredDays.push(response.data.data.history[i])
    }

    const prices = filteredDays.map(cur => parseInt(cur.price))

    let duplicate = timeConverter(filteredDays[0].timestamp); 
    let tempDuplicate = duplicate; 
    console.log(duplicate)

    const times = filteredDays.map(cur => {

      const date = timeConverter(cur.timestamp); 
      // get rid of duplicate dates
      if (date === duplicate){

        return ""; 
      }
      else {
        duplicate = date; 
        return date; 
      }

    })

    times.splice(-1,1)

    setPriceList(prices); 
    setTimeList([tempDuplicate, ...times]);
    console.log(prices.length, times.length)
    setMax(Math.max(...priceList)); 
    setMin(Math.min(...priceList)); 
    

  }, [])


  return (
    <StyledLineGraph>
      <h2 className="coin--name">{nameOfCoin}</h2>
      <Line 
        data={{
          labels: timeList,
          datasets: [
            {
              borderColor: "#F6AA2C",
              spanGaps: true,
              lineTension: 0,
              fill: true,
              backgroundColor: "transparent", 
              borderColor: "black",
              pointBackgroundColor: "black", 
              borderJoinStyle: "round",
              label: `${nameOfCoin} prices`,
              data: priceList,
            },
          ],
        }}
        height="300px"
        options={{
            animation: {
              
            },
            maintainAspectRatio: false, 
            scales: {
              yAxes: [{
                ticks: {
                  min: min - 10, 
                  max: max + 10, 
                }, 
              }],  
            },
            legend: {
              labels: {
                defaultFontFamily: "'Cairo', sans-serif"
              }
            }
        }}
      />
    </StyledLineGraph>
  );
};

export default LineGraph;


// this is a test push