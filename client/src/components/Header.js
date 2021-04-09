import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import TickerBox from "./TickerBox";




const StyledHeaderContainer = styled.header`
    background-color: #654321;
    min-height: 8vh;
`

export const Header = (props) => {
    return (
        <StyledHeaderContainer>
            <TickerBox />
        </StyledHeaderContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
