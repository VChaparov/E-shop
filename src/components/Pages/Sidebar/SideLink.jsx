import { Link } from "react-router";
import { Box } from "@mui/material";

function SideLink(props) {
  return (
    <Link to={{ pathname: props.url }} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: { xs: "8em", sm: "8em", md: "8em", lg: "9em" },
          height: { xs: "1.7em", sm: "1.7em", md: "1.5em", lg: "1.5em" },
          fontSize: { xs: "8pt", sm: "13pt", md: "15pt" },
        }}
        className="side-link"
      >
        {props.title}
      </Box>
    </Link>
  );
}

export default SideLink;
