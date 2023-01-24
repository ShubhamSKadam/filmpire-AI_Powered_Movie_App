import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    containerSpaceAround: {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px 0 !important",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            flexWrap: "wrap",
        },
    },
}));
