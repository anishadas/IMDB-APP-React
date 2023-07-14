import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import MyContext from "../../../Context/MyContext";
import { useContext } from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    styled,
    Button,
} from "@mui/material";

const MyCardMedia = styled(CardMedia)({
    objectFit: "contain"
})

const MyButton = styled(Button)({
    position: "relative",
    left: "30px",
    backgroundColor: "yellow",
    padding: "2px 8px"
})



const Movie = ({ singleMovie }) => {
    const { handleAddToCart, cart, handleRemoveCart } = useContext(MyContext);
    let isInCart = cart.findIndex(item => item.imdbID === singleMovie.imdbID);
    
    console.log(isInCart)
    return (
        <Card sx={{ margin: 5, width: 300, height: 450 }}>
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
                {
                    isInCart!==-1?
                        (
                            <MyButton size="small" color="primary" onClick={() => handleRemoveCart(singleMovie.imdbID)}>
                                Remove from cart
                            </MyButton>
                        ) : (
                            <MyButton size="small" color="primary" onClick={() => handleAddToCart(singleMovie.imdbID)}>
                                Add To Cart
                            </MyButton>
                        )
                }

            </CardActions>
        </Card>
    );
};

export default Movie;