import Header from "./Pages/Header/Header.jsx";
import SideBar from "./Pages/Sidebar/SideBar.jsx";
import { Box } from "@mui/material";
import Content from "./Pages/Content/Content.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Box
        className="body-container"
        sx={{
          width: "100%",
          padding: "0",
          position: "relative",
          top: { xs: "9em", sm: "5em" },
          display: "inline-flex",
          justifyItems: "center",
        }}
      >
        <SideBar />
        <Box className="content-wrapper">
          <Content />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
