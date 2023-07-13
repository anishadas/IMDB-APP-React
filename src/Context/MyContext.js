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
        if (search == "") {
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
        setCart([
            ...cart,
            ...movie
        ])
    }

    const handleRemoveCart = (id) => {
        const Mymovies = cart.filter(item => item.imdbID !== id);
        setCart(Mymovies)
    }

    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        getMovies(search);
    }, [search]);

    
    const value = { open, setOpen, movies, setMovies, handleAddToCart, cart, setCart, handleRemoveCart ,search,setSearch};
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
};

export default MyContext;