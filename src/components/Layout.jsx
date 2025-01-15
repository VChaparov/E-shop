import Header from "./Pages/Header/Header.jsx";
import SideBar from "./Pages/Sidebar/SideBar.jsx";
import {Box} from "@mui/material"
import Content from "./Pages/Content/Content.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Box className="body-container"
      
      sx={{}}>
        <SideBar />
        <Box className="content-wrapper">
        <Content />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
