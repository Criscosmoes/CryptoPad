import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';




const StyledFooterContainer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #000000;
    color: grey;
    min-height: 7vh;
    font-size: 1rem;
    padding-right: 2rem;
`

export const Footer = (props) => {
    return (
        <StyledFooterContainer>
            <p><a href="https://www.linkedin.com/in/cristian-fernandez-4357091a9/" rel="noreferrer" target="_blank">Cris</a> & <a href="https://linkedin.com/in/mrerickgonzalez/" rel="noreferrer" target="_blank">Erick</a> teamed up on this project <span>🙌</span></p>
        </StyledFooterContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
