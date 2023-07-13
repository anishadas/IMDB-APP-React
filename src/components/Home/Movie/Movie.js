import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import MyContext from "../../../Context/MyContext";
import { useContext } from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
    styled,
    Button,
} from "@mui/material";

const MyCardMedia = styled(CardMedia)({
    objectFit: "contain"
})

const MyButton = styled(Button)({
    position: "relative",
    left: "60px",
    backgroundColor: "yellow",
    padding: "2px 8px"
})



const Movie = ({ singleMovie }) => {
    const { handleAddToCart } = useContext(MyContext)
    console.log(singleMovie)
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
                <MyButton size="small" color="primary" onClick={() => handleAddToCart(singleMovie.imdbID)}>
                    Add To Cart
                </MyButton>
            </CardActions>
        </Card>
    );
};

export default Movie;