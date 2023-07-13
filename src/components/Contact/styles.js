import { Paper, styled, Box, TextField } from "@mui/material";

export const MyPaper = styled(Paper)({
    width: "450px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform:"translate(-50%,-50%)"
})

export const MyBox = styled(Box)({
    width: "400px"
})

export const MyTextField = styled(TextField)({
    marginBottom:"10px"
})

