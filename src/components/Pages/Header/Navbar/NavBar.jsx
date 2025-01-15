import NavLink from "./NavLink";
import { Box } from "@mui/material";
function NavBar() {
  return (
    <Box className="nav-bar" sx={{ display: { xs: "none", md: "flex" } }}>
      <NavLink title="Home" url="/" />
      <NavLink title="Products" url="/Products" />
      <NavLink title="About" url="/About" />
      <NavLink title="Contacts" url="/Contacts" />
    </Box>
  );
}

export default NavBar;
