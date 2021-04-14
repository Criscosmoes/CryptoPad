import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { AiOutlineArrowUp } from "react-icons/ai"
const StyledTickerContainer = styled.div`
    display: flex;
    align-items: baseline;
    font-size: 2rem;
    padding-top: 3rem;
    padding-left: 5rem;
    min-height: 8vh;
    background-color: #000000;
    color: #a3eada;
    #ticker-symbol {
        
    }
    #icon {
        border: none;
        color: green;
    }
    #price {
        color: #a3eada;
    }

`

export const TickerBox = (props) => {
    return (
        <StyledTickerContainer>
            <div id="ticker-symbol">BTC:<AiOutlineArrowUp id="icon"/></div>
            <div id="price"><p>$57,000.00</p></div>
        </StyledTickerContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerBox)
