import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { AiOutlineLineChart } from "react-icons/ai";
import { FcLineChart } from "react-icons/fc";
import { ImNewspaper } from "react-icons/im";
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

import Item from "../Item";
import Header from './Header';
import Footer from './Footer';
import Article from './Article';

const StyledLandingContainer = styled.div`
        .grid-container {
            /* padding-left: 3rem; */
            .prog-div {
                
                #progress > * {
                    border: none;
                }
            }
        }
    #news {
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        /* background-color: grey; */
    }
    #progress {
        border: none;
    }
    border-color: red;
    font-family: 'Reem Kufi', sans-serif;
    background-color: #000000;
    color: white;
    min-height: 80vh;
    main {
        display: flex;
        flex-direction: column;
        #logo {
            font-size: 8rem;
            color: #a3eada;
        } 
        .carousel {
            padding-top: 2rem;
        }
        /* border: none; */
        border-top: 1px solid;
        border-bottom: none;
        border-left: none;
        border-right: none;
        border-top-color: #ffffff;

        padding-top: 7rem;
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
        margin-left: 15rem;
        margin-right: 15rem;
        display: flex;
        justify-content: space-around;
        padding-top: 5rem;
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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0,
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}))

export const Landing = (props) => {
    const [articles, setArticles] = useState([]);
    const classes = useStyles()


    useEffect(() => {


    var options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
            q: 'bitcoin, ethereum, litecoin, aave, dogecoin, cardano, xrp, decentreland',
            count: '20',
            setLang: 'EN',
            cc: 'us',
            mkt: 'en-US',
            freshness: 'Week',
            originalImg: 'true',
            safeSearch: 'Off'
    },
        headers: {
            'x-bingapis-sdk': 'true',
            'x-rapidapi-key': '7779971c15mshc50eca24e4f9a8fp14c0cejsnfbadf31577a4',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setArticles(response.data.value)
    }).catch(function (error) {
        console.error(error);
    });

    }, [])

  

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
                    <Carousel className="carousel" breakPoints={breakPoints}>
                        <Item>One</Item>
                        <Item>Two</Item>
                        <Item>Three</Item>
                        <Item>Four</Item>
                        <Item>Five</Item>
                        <Item>Six</Item>
                        <Item>Seven</Item>
                        <Item>Eight</Item>
                    </Carousel>
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
                <Grid container spacing={1} className="grid-container">
                    {articles.length > 0
                    ?
                    articles.map((article) => (
                        <Grid item xs={6} md={3}>
                            <Article key={article.datePublished} {...article} />
                        </Grid>
                    ))
                    : 
                    <Grid >
                        <div className="prog-div">
                            <CircularProgress color="secondary" id="progress"/>           
                        </div>
                    </Grid>
                    }
                </Grid>

                
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
