import { Paper, styled, TextField, IconButton, createTheme, List } from "@mui/material";
const theme = createTheme();
export const MyPaper = styled(Paper)({
    // margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "70%",
    position: "absolute",
    left: "50%",
    transform:"translate(-50%,10%)",
    padding: theme.spacing(4),
})

export const MyPaper2 = styled(Paper)({
    padding: theme.spacing(1),
    position: "relative",
    width:"100%"
})



export const MyTextField = styled(TextField)({
    width: "100%",
})

export const MyIconButton = styled(IconButton)({
    position: "absolute",
    right: "20px",
    bottom:"15px"
})

export const MyList = styled(List)({
    width: "100%",
    // padding:theme.spacing(2),
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
})



