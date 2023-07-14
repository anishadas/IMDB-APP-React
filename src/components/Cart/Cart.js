import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { styled, Card, CardHeader, Avatar, IconButton, CardActions, Checkbox, Button, CardMedia, ButtonGroup } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { useNavigate } from 'react-router';

const MyCardMedia = styled(CardMedia)({
    objectFit: "contain"
})



const Cart = () => {

    const { cart, handleDecrease, handleIncrease } = useContext(MyContext);

    let total = cart.map(movie => movie.qty).reduce((sum, current) => sum + current, 0);

    const navigate = useNavigate();

    return (
        <>
            {/* total qty */}
            <h3 className='cart-total'>Total Qty: {total}</h3>
            <ul className='cart'>
                {
                    // mapping over each cart item
                    cart?.map(singleMovie => (
                        <li>
                            <Card sx={{ margin: 5, maxWidth: 300, height: 450 }}>
                                {/* for the movie title */}
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
                                {/*  for the movie poster */}
                                <MyCardMedia
                                    component="img"
                                    height="300"
                                    image={singleMovie.Poster}
                                    alt="poster"
                                />
                                {/* other functionalities in a movie card */}
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
                                        <Button onClick={() => {
                                            navigate('/cart');
                                            handleIncrease(singleMovie.imdbID)
                                        }}>+</Button>
                                        <Button>{singleMovie.qty}</Button>
                                        <Button onClick={() => {
                                            navigate('/cart');
                                            handleDecrease(singleMovie.imdbID)
                                        }}>-</Button>
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
