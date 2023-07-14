import { Grid,createTheme,styled,Box } from "@mui/material";
const theme = createTheme();

export const MyGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0,
    width: "100%",
    marginTop: "10px",
})
export const MyPaper = styled(Box)({

    padding: theme.spacing(2)
})