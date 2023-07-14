import { Paper, styled,  TextField } from "@mui/material";

export const MyPaper = styled(Paper)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,10%)",
})


export const MyTextField = styled(TextField)({
    marginBottom:"10px"
})

