import NavBar from "./Navbar/NavBar";
import SearchBar from "./SearchBar";
import Logo from "/images/logo.svg";
import MenuDrawer from "./MenuDrawer";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          zIndex: "1",
          position: "fixed",
          display: "inline-flex",
          height: {xs:"9em",sm:"5em"},
          backgroundColor: "rgba(0, 6, 53, 0.7)",
          boxShadow: "0px 3px 8px black",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="logo">
          <img src={Logo} alt="logo.svg"></img>
        </Box>
        <Box
          className="header-bars"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "15rem", sm: "18rem", md: "30rem", lg: "40rem" },
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
