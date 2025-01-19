import "./utilitiesStyles.css";
import { Box } from "@mui/material";

function DropdownResult(props) {
  var URL = `${import.meta.env.BASE_URL}/images/${props.imgURL}.jpg`;
  return (
    <Box
      className="result"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        margin: "0 5px 5px 5px",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          backgroundSize: "contain",
          backgroundImage: `url(${URL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "80px",
          height: "80px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "15%",
          width: "100%",
          color: "rgb(0, 0, 0)",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "center",
        }}
      >
        <Box>{props.name}</Box>
        <Box>$ {props.price}</Box>
      </Box>
    </Box>
  );
}

export default DropdownResult;
