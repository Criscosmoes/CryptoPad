import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledLandingContainer = styled.div`
    background-color: #FFFFFF;
    min-height: 87vh;
`

export const Landing = (props) => {
    return (
        <>
            <Header />
            <StyledLandingContainer>
                <p>hi</p>
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
