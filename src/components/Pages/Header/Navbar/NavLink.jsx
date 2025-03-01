import { Link } from "react-router";
import { Box } from "@mui/material";

function NavLink(props) {
  return (
    <Link to={{ pathname: props.url }} style={{ textDecoration: "none" }}>
      <Box
      sx={{width:{xs:"8em", md:"5em"}, height:{sm:"1.5em", md:"1.5em"}, margin:{sm:"1px", md:"5px"}}}
       className="nav-link">{props.title}</Box>
    </Link>
  );
}

export default NavLink;
