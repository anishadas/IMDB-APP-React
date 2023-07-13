import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import Movie from './Movie/Movie';
import './styles.css'
function Home() {
    const { movies ,cart} = useContext(MyContext);
    console.log(cart)
    return (
        <>
            <ul>
                {
                    movies?.map(singleMovie => <li><Movie singleMovie={singleMovie}/></li>)
                }
           </ul>
        </>
    )
}

export default Home
