import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { styled, Card, CardHeader, Avatar, IconButton, CardActions, Checkbox, Button, CardMedia, ButtonGroup } from '@mui/material';
import './styles.css';
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";


const MyCardMedia = styled(CardMedia)({
    objectFit: "contain"
})



const Cart = () => {

    const { cart, handleDecrease, handleIncrease } = useContext(MyContext);

    let total = cart.map(movie => movie.qty).reduce((sum, current) => sum + current, 0);

    return (
        <>
            <h3 className='total'>Total Qty: {total}</h3>
            <ul>
                {
                    cart?.map(singleMovie => (
                        <li>
                            <Card sx={{ margin: 5, maxWidth: 300, height: 450 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            {singleMovie.Type[0].toUpperCase()}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVert />
                                        </IconButton>
                                    }
                                    title={singleMovie.Title}
                                    subheader={singleMovie.Year}
                                />
                                <MyCardMedia
                                    component="img"
                                    height="300"
                                    image={singleMovie.Poster}
                                    alt="Paella dish"
                                />
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <Share />
                                    </IconButton>
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                        <Button onClick={() => handleIncrease(singleMovie.imdbID)}>+</Button>
                                        <Button>{singleMovie.qty}</Button>
                                        <Button onClick={() => handleDecrease(singleMovie.imdbID)}>-</Button>
                                    </ButtonGroup>
                                </CardActions>
                            </Card>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}

export default Cart
