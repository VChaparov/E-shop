import NavBar from "./Navbar/NavBar";
import SearchBar from "./SearchBar";
import Logo from "/images/logo.svg";
import MenuDrawer from "./MenuDrawer"
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box className="header">
        <Box className="logo">
          <img src={Logo} alt="logo.svg"></img>
        </Box>
        <Box className="header-bars">
          <SearchBar />
          <NavBar />
        </Box>
        <MenuDrawer />
      </Box>
    </>
  );
}

export default Header;
