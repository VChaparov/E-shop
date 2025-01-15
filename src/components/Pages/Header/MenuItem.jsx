import { Link } from "react-router";
import { Box } from "@mui/material";

function MenuItem(props) {
  return (
    <Link to={{ pathname: props.url }} style={{ textDecoration: "none" }}>
      <Box
      sx={{width:"8em", height:"90%"}}
       className="nav-link">{props.title}</Box>
    </Link>
  );
}

export default MenuItem;
