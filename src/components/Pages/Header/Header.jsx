import NavBar from "./Navbar/NavBar";
import SearchBar from "./SearchBar";
import Logo from "/images/logo.svg";
import MenuDrawer from "./MenuDrawer";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box className="header" sx={{ width: "100%" }}>
        <Box className="logo">
          <img src={Logo} alt="logo.svg"></img>
        </Box>
        <Box
          className="header-bars"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "20rem", sm: "22rem", md: "30rem", lg: "40rem" },
          }}
        >
          <SearchBar />
          <NavBar />
        </Box>
        <MenuDrawer />
      </Box>
    </>
  );
}
export default Header;
