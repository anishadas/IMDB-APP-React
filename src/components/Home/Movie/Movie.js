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

// movie custom stylings
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
    // check if movie is in cart or not
    let isInCart = cart.findIndex(item => item.imdbID === singleMovie.imdbID);

    return (
        <Card sx={{  width: 300, height: 450,marginBottom:"20px" }}>
            {/* movie title */}
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
            {/* poster */}
            <MyCardMedia
                component="img"
                height="300"
                image={singleMovie.Poster}
                alt="Paella dish"
            />
            {/* functionalities */}
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
                    isInCart !== -1 ?
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