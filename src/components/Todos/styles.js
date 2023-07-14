import { Paper, styled, TextField, IconButton, createTheme, List } from "@mui/material";
const theme = createTheme();
export const MyPaper = styled(Paper)({
    marginTop:"30px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
})

export const MyPaper2 = styled(Paper)({
    padding: theme.spacing(1),
    position: "relative",
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
    // width: "80%",
    padding:theme.spacing(2),
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
})



