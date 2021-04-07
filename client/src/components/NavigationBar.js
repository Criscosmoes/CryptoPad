import React from 'react'
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg"; 
import { FiSettings } from "react-icons/fi"; 


const StyledNavigationBar = styled.div`



& {
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    background: white; 
    width: 250px; 
    height: 100vh;
    color: #58535C;

}

& > * {
    margin: 3%
}

// user details 

.user--details {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    width: 90%; 
}

.user--details > * {
    margin: 2%
}

h2 {
    font-size: 2.5rem;
    font-family: 'Cairo', sans-serif;
}

// navigation bar

.navigation {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column;
    height: 300px; 
    width: 100%
}

.navigation > * {
    display: flex; 
    width: 100%;
    height: 70px; 
    font-size: 3rem;
    margin-top: 5%
}

.link {
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    transition: ease-out .3s;
    color: #58535C;
    font-family: 'Cairo', sans-serif;

}

.link:hover {
    background: #ECF5F5;
    transition: ease-in .3s;
    color: black; 

}

.link > * {
    margin: 0% 3%;
}

.icon {
    border: none; 
}


`

const NavigationBar = () => {
    return (
        <StyledNavigationBar>
            <div className="user--details">
                <img src="https://lh3.googleusercontent.com/a-/AOh14GjYSxDP4rgpSy778cQCV-tW2p8mN2YLGY9-bv8W=s96-c-rg-br100" alt="user profile picture"/>
                <h2>Cristian Fernandez</h2>
            </div>
            <nav className="navigation">
                <Link className="link" to="/dashboard"><MdDashboard className="icon" /><h3>Dashboard</h3></Link>
                <Link className="link" to="/profile"><CgProfile  className="icon" /><h3>Profile</h3></Link>
                <Link className="link" to="/settings"><FiSettings className="icon" /><h3>Settings</h3></Link>
            </nav>
        </StyledNavigationBar>
    )
}

export default NavigationBar
