import { Paper, styled,  TextField } from "@mui/material";

export const MyPaper = styled(Paper)({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    marginTop: "60px"
})


export const MyTextField = styled(TextField)({
    marginBottom:"10px"
})

