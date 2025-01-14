import { Link } from "react-router";
import { Box } from "@mui/material";

function NavLink(props) {
  return (
    <Link to={{ pathname: props.url }} style={{ textDecoration: "none" }}>
      <div className="nav-link">{props.title}</div>
    </Link>
  );
}

export default NavLink;
