import { Notifications, Pets } from "@mui/icons-material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { Link } from "react-router-dom";
import {
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Menu,
    MenuItem,
    Typography,
    Box,
    IconButton,
    Button,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { StyledToolbar, Search, Icons, UserBox } from "./styles";

const pages = [
    { menu: "Home", link: "/" },
    { menu: "Cart", link: "/cart" },
    { menu: "About", link: "/about" },
    { menu: "Contact", link: "/contact" },
    { menu: "Todos", link: "/todos" }
];
const Navbar = () => {
    const { open, setOpen, cart, search, setSearch } = useContext(MyContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    My IMDB Cart &nbsp;&nbsp;
                </Typography>

                {/* **********************************menu items************************************* */}
                {/* for large screen */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{}}>
                    {pages.map((page, index) => (
                        // <Button
                        //     key={index}
                        //     onClick={handleCloseNavMenu}
                        //     sx={{ my: 2, color: 'white', display: 'block', }} style={{border:"2px solid red" }}
                        // >
                        <Link to={page.link} style={{ textDecoration: "none", color: "white" }}>
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', }}
                            >
                                {page.menu}
                            </Button>
                        </Link>
                    ))}
                </Box>
                {/* for small screen */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page, index) => (
                            <Link to={page.link} style={{ textDecoration: "none", color: "black" }}>
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {page.menu}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Box>
                {/* **************************************end******************************************** */}

                <Search style={{ width: "30%" }}>
                    <InputBase placeholder="type atleast 3 letters to search..." onChange={(e) => setSearch(e.target.value)} style={{ width: "100%" }} />
                </Search>
                <Icons>

                    <Badge badgeContent={cart?.length} color="error">
                        <Link to="/cart">
                            <ShoppingCartRoundedIcon style={{ fill: 'white' }} />
                        </Link>

                    </Badge>

                    <Avatar
                        sx={{ width: 32, height: 32 }}
                        src="https://m.media-amazon.com/images/I/41jLBhDISxL._AC_UF1000,1000_QL80_.jpg"
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 32, height: 32 }}
                        src="https://m.media-amazon.com/images/I/41jLBhDISxL._AC_UF1000,1000_QL80_.jpg"
                    />
                </UserBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;