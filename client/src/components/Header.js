import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import TickerBox from "./TickerBox";

const StyledHeaderContainer = styled.header`
    /* background-color: #654321; */
    display: flex;
    min-height: 8vh;
    /* min-width: 100vw; */
`

export const Header = (props) => {

    const fakeCoinData = [
        {
            symbol: "BTC",
            price: "60,000"
        },
        {
            symbol: "ETH",
            price: "2,200"
        },

    ]

    return (
        <StyledHeaderContainer>
            {fakeCoinData.map(coin => (
                <TickerBox coin={coin} />
            ))}
        </StyledHeaderContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
