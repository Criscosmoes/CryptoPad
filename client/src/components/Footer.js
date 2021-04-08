import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';




const StyledFooterContainer = styled.footer`
    background-color: #123456;
    min-height: 5vh;
`

export const Footer = (props) => {
    return (
        <StyledFooterContainer>
            <p>Footer</p>
        </StyledFooterContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
