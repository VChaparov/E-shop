import "./utilitiesStyles.css";
import { Box } from "@mui/material";

function Card(props) {
  return (
    <Box
      className="card"
      sx={{
        width: { xs: "6em", sm: "7em", md: "9em", lg: "12em" },
        height: { xs: "8em", sm: "9em", md: "11em", lg: "14em" },
      }}
    >
      <img
        className="card-image"
        src={`${import.meta.env.BASE_URL}/images/${props.imgURL}.jpg`}
      ></img>
      <Box
        sx={{ fontSize: { xs: "6pt", sm: "8pt", md: "10pt", lg: "12pt" } }}
        className="name"
      >
        {props.name}
      </Box>
    </Box>
  );
}

export default Card;
