import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineLineChart } from "react-icons/ai";
import { FcLineChart } from "react-icons/fc";
import { ImNewspaper } from "react-icons/im";
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledLandingContainer = styled.div`
    border-color: red;
    font-family: 'Reem Kufi', sans-serif;
    background-color: #000000;
    color: white;
    min-height: 85vh;
    main {
        #logo {
            font-size: 8rem;
            color: #a3eada;
        } 
        /* border: none; */
        border-top: 1px solid;
        border-bottom: none;
        border-left: none;
        border-right: none;
        border-top-color: #ffffff;

        padding-top: 15rem;
        padding-left: 5rem;
        #main-text {
            font-size: 3.5rem;
            max-width: 35rem;
        }
        #main-sub-text {
            padding-top: 3rem;
            font-size: 1.6rem;
            max-width: 35rem;
        }
    }
    section {       
        margin-left: 40rem;
        margin-right: 40rem;
        display: flex;
        justify-content: space-around;
        padding-top: 35rem;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon {
                margin: 1rem;
                border: none;
                color: #a3eada;
            }
            .sub-text {
                color: #6d6875;
                font-size: 1.5rem;
            }
        }
    }
`

export const Landing = (props) => {
    return (
        <>
            <Header />
            <StyledLandingContainer>
                <main>
                    <div id="logo">
                        <h1>CryptoPad</h1>
                    </div>
                    <div id="main-text">
                        <p>Stay up-to-date on your favorite cryptos</p>
                    </div>
                    <div id="main-sub-text">
                        <p>Your one-stop-shop for following the latest news around the web on your favorite crypto-currencies</p>
                    </div>
                </main>
                <section id="features">
                    <div>
                        <p>Get Info</p>
                        <ImNewspaper className="icon" />
                        <p className="sub-text">Stay informed on latest crypto news</p>
                    </div>
                    <div>
                        <p>Track</p>
                        <AiOutlineLineChart className="icon" />
                        <p className="sub-text">Track prices and see trends</p>
                    </div>
                    <div>
                        <p>Compare</p>
                        <FcLineChart className="icon" />
                        <p className="sub-text">Compare and research performance</p>
                    </div>                    

                    
                </section>
                
            </StyledLandingContainer>
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
