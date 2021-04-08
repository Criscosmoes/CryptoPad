import React, { useEffect } from 'react'

import styled from "styled-components"; 


import NavigationBar from './NavigationBar';
import LineGraph from './LineGraph';
import { connect } from 'react-redux';
import { fetchCrypto } from './../actions/index';



const StyledDashboard = styled.div`


& {
    display: flex;
    height: 100vh; 
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

const Dashboard = ({fetchCrypto}) => {



    useEffect(() => {

        fetchCrypto(); 

    }, [])


    return (
        <StyledDashboard>
            <NavigationBar />
            <section className="middle--section">
                <div className="intro--data">
                    <h1>Welcome Back, Cristian</h1>
                    <div className="crypto--price">
                        <div>
                            <h3 className="crypto--title">Bitcoin</h3>
                            <h4>56,044.90 USD</h4>
                        </div>
                        <div>
                            <h3 className="crypto--title">Litecoin</h3>
                            <h4>218.89 USD</h4>
                        </div>
                        <div>
                            <h3 className="crypto--title">Ethereum</h3>
                            <h4>1,980.26 USD</h4>
                        </div>
                    </div>
                </div>
                <LineGraph />
            </section>
            <section className="right--section">

            </section>
        </StyledDashboard>
    )
}



const mapStateToProps = state => {


    return {
         
    }
}

export default connect(mapStateToProps, { fetchCrypto })(Dashboard)
