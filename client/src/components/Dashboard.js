import React from 'react'

import styled from "styled-components"; 


import NavigationBar from './NavigationBar';

const StyledDashboard = styled.div`


& {
    display: flex; 
    height: 100vh; 
    background: #F4F7F9; 
}



`

const Dashboard = () => {
    return (
        <StyledDashboard>
            <NavigationBar />
        </StyledDashboard>
    )
}

export default Dashboard
