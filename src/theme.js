import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue"
        },
        secondary: {
            main: '#15c630',
        },
        otherColor: {
            main: "#999"
        }
    }
})

export const theme1 = createTheme({
    typography: {
        h1: {
            fontFamily: '"Montserrat", Open Sans',
            color:"red"
        }
    }
})