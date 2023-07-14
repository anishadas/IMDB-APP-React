import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import Movie from './Movie/Movie';
import { Grid ,Box,Typography} from '@mui/material';
import HomePic from "../../assets/SL-121019-25870-14.jpg"
import { MyGrid,MyPaper } from './styles';



function Home() {
    const { movies ,cart} = useContext(MyContext);
    console.log(cart)
    return (
        <>
            <MyPaper elevation={3} >
                <MyGrid container spacing={2}>
                    <MyGrid item xs={6}>
                        <Box
                            component="div"
                            sx={{
                                borderRadius: "30%",
                                height: 300,
                                // width: "70%",
                                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                            }}
                        >
                            <img src={HomePic} className='image' alt="homePoster"/>
                        </Box>
                    </MyGrid>
                    <Grid item xs={6}>
                        <h1 className='typo1'>
                            WELCOME
                        </h1>
                        <Typography variant="h4" style={{paddingLeft:"10px"}}>
                            to
                        </Typography>
                        <h1 variant="h3" className='typo2'>
                            IMDB CART
                        </h1>
                        <Typography variant="h6" style={{ paddingLeft: "10px" ,color:"gray"}}>
                            - Scroll through the movies & add the favourites to your cart
                        </Typography>
                    </Grid>
                </MyGrid>
            </MyPaper>
            
            
            <h1 className='typo3'>Movie List</h1>
            <ul className='home'>
                {
                    movies?.map(singleMovie => <li><Movie singleMovie={singleMovie}/></li>)
                }
           </ul>
        </>
    )
}

export default Home
