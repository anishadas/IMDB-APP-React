import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = "https://www.omdbapi.com/?apikey=c997ccc2&";
const MyContext = createContext(null);
// getting cart from local storage
const LSCart = JSON.parse(localStorage.getItem("CART")) || [];

export const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState(LSCart);
    const [search, setSearch] = useState("dil");

    // for handling the side navbar on small screens
    const [open, setOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

// for fetching themovies from db
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

    // cart operations - add
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

    // cart operations - delete
    const handleRemoveCart = (id) => {
        const Mymovies = cart.filter(item => item.imdbID !== id);
        setCart(Mymovies)
    }

    // cart operations - decrease qty
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
    }

    // cart operations - increase qty
    const handleIncrease = (id) => {
        cart.forEach(movie => {
            if (movie.imdbID === id) {
                movie.qty += 1
            }
        })

        setCart(cart);
        localStorage.setItem("CART", JSON.stringify(cart));

    }

    // cart dependency
    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));
    }, [cart]);

    // whenever search state changes
    useEffect(() => {
        getMovies(search);
    }, [search]);


    const value = {
        movies,
        setMovies,
        handleAddToCart,
        cart, setCart,
        handleRemoveCart,
        search,
        setSearch,
        handleDecrease,
        handleIncrease,
        open,
        setOpen,
        anchorElNav,
        setAnchorElNav,
        handleCloseNavMenu,
        handleOpenNavMenu
    };
    
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
};

export default MyContext;