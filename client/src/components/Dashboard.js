import React, { useEffect } from 'react'

import styled from "styled-components"; 


import NavigationBar from './NavigationBar';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
import { fetchCrypto } from './../actions/index';



const StyledDashboard = styled.div`


& {
    display: flex;
    background: #F4F7F9; 
    font-family: 'Cairo', sans-serif;
}

.middle--section {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-direction: column; 
    margin-top: 2%;
    margin-left: 2%;
    width: 60%; 
}

.middle--section > * {
    width: 100%
}

.right--section {
    width: 30%;
}

.intro--data {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    flex-direction: column;
    height: 300px; 
}

h1 {
    font-size: 6rem; 
    width: 100%
}

.crypto--title {
    font-size: 5rem; 
}

h4 {
    font-size: 3rem; 
}




.crypto--price {
    display: flex; 
    justify-content: space-around;
    align-items: center; 
    width: 100%; 
    /* text-align: center;  */
}

.crypto--price > * {
    width: 33%;
}

`

const Dashboard = ({fetchCrypto, btc}) => {



    return (
        <StyledDashboard>
            <NavigationBar />
            <section className="middle--section">
                <div className="intro--data">
                    <h1>Welcome Back, Cristian</h1>
                    <div className="crypto--price">
                    </div>
                </div>
                <LineGraph nameOfCoin="bitcoin" coinId={"Qwsogvtv82FCd"} />
                <LineGraph nameOfCoin="ethereum" coinId={"razxDUgYGNAdQ"} />
                <LineGraph nameOfCoin="litecoin" coinId={"D7B1x_ks7WhV5"} />
            </section>
            <section className="right--section">

            </section>
        </StyledDashboard>
    )
}



const mapStateToProps = state => {


    return {
        btc: state.coins.btc, 
    }
}

export default connect(mapStateToProps, { fetchCrypto })(Dashboard)
