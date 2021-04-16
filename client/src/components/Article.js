import React, { useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

// import { connect } from 'react-redux'

const StyledArticleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: black; */
    /* font-size: 2rem; */
    padding: 1rem;
    /* background-color: white; */
    width: 30rem;
    height: 30rem;
    padding: 3rem;

    .card {

        background-color: #74EBD5;
        background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);

        color: white;
    }


    .card-actions {
        display: flex;
        justify-content: space-between;
        background-color: #f8f9fa;
        a {
            color: black;
        }
        #heart {
            border: none;
            color: red;            
        }
        #heart-outline {
            border: none;
            color: red;
        }
    }

`


const useStyles = makeStyles({
  root: {
    
  },
  title: {
    fontSize: 25,
    color: "#d8e2dc",
  },
  pos: {
    marginBottom: 3,
  },
});

export const Article = ({ datePublished, name, provider, url, category }) => {
    const [faveAdded, setFaveAdded] = useState(false);

    const classes = useStyles();

    const toggleFavorite = () => {
        setFaveAdded(!faveAdded)
    }

    return (
        <StyledArticleContainer>
            <Card variant="outlined" className="card">
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                    {provider[0].name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" style={{color: "#fed9b7"}}>
                    {category && category}
                    </Typography>
                    <Typography variant="body2" component="p" style={{color: "#f4f1de"}}>
                        Published: {datePublished}
                    <br />
                    </Typography>
                </CardContent>
                <CardActions className="card-actions">
                    <Button size="small"><a href={url} rel="noreferrer" target="_blank">See Article</a></Button>
                    <IconButton onClick={toggleFavorite}>
                        {faveAdded 
                        ?
                        <FavoriteIcon id="heart" />
                        : <FavoriteBorderIcon  id="heart-outline"/>}
                    </IconButton>
                    
                </CardActions>
                </Card>
        </StyledArticleContainer>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Article)

export default Article;


