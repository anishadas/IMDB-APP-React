import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { styled,Card, CardHeader, Avatar, IconButton, CardContent, CardActions, Checkbox, Button, CardMedia ,Typography} from '@mui/material';
import './styles.css';
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const MyCardMedia = styled(CardMedia)({
    objectFit: "contain"
})

const MyButton = styled(Button)({
    backgroundColor: "yellow",
    padding: "2px 8px"
})


const Cart = () => {

    const { cart, handleRemoveCart } = useContext(MyContext);
    
    return (
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
                                <MyButton size="small" color="primary" onClick={()=>handleRemoveCart(singleMovie.imdbID)}>
                                    Remove from Cart
                                </MyButton>
                            </CardActions>
                        </Card>
                    </li>
                ))
            }
        </ul>
    )
}

export default Cart
