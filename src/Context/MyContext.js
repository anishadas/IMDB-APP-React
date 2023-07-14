import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = "https://www.omdbapi.com/?apikey=c997ccc2&";
const MyContext = createContext(null);
const LSCart = JSON.parse(localStorage.getItem("CART")) || [];

export const ContextProvider = ({ children }) => {
    // for menus when screen size reduces
    const [open, setOpen] = useState(false);
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState(LSCart);
    const [search, setSearch] = useState("dil");

    function getMovies(search) {
        if (search === "") {
            setSearch("dil")
        }
        axios.get(`${URL}s=${search}`)
            .then(res => {
                const data = res.data.Search;
                setMovies(data);
            });
    }
    const handleAddToCart = (id) => {
        const movie = movies.filter(item => item.imdbID === id);
        const cart_movie = {
            ...movie[0],
            qty: 1,
        }
        setCart([
            ...cart,
            cart_movie
        ])
    }

    const handleRemoveCart = (id) => {
        const Mymovies = cart.filter(item => item.imdbID !== id);
        setCart(Mymovies)
    }

    const handleDecrease = (id) => {

        const move_to_update = cart.filter(item => item.imdbID === id);
        if (move_to_update[0].qty > 1) {
            cart.forEach(movie => {
                if (movie.imdbID === id) {
                    movie.qty -= 1
                }
            })

            setCart(cart);
            
        }
        else {
            setCart(cart.filter(item => item.imdbID !== id))
        }

        localStorage.setItem("CART", JSON.stringify(cart));
        window.location.reload(true);
    }

    const handleIncrease = (id) => {
        // let updated = cart?.filter(item => item.imdbID = id).map(item=>)
        // console.log(updated)
        cart.forEach(movie => {
            if (movie.imdbID === id) {
                movie.qty += 1
            }
        })

        setCart(cart);
        window.location.reload(true);
        // console.log(cart)
        localStorage.setItem("CART", JSON.stringify(cart));

    }

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        getMovies(search);
    }, [search]);

  

    const value = { open, setOpen, movies, setMovies, handleAddToCart, cart, setCart, handleRemoveCart, search, setSearch, handleDecrease, handleIncrease };
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
};

export default MyContext;