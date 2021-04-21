import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { AiOutlineArrowUp } from "react-icons/ai"
const StyledTickerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 8vh;
    font-size: 2rem;
    /* padding-top: 3rem; */
    padding-left: 5rem;
    /* background-color: #14213d; */

    color: #a3eada;
    .ticker-card {
        color: black;
        padding: 2rem;
        margin-top: .25rem;
        margin-bottom: .25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    }
    #ticker-symbol {
        
    }
    #icon {
        border: none;
        color: green;
    }
    #price {
        color: black;
    }

`

export const TickerBox = (props) => {
    const { coin } = props;
    return (
        <StyledTickerContainer>
            <div className="ticker-card">
                <div id="ticker-symbol">{coin.symbol}:<AiOutlineArrowUp id="icon"/></div>
                <div id="price"><p>${coin.price}</p></div>
            </div>
        </StyledTickerContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerBox)
