import NavLink from "./Navbar/NavLink";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MenuDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const closeDrawer = ()=>{
    console.log("close!")
    setMobileOpen(false)
}

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        style={{ justifyContent: "end", alignContent: "end" }}
        sx={{
          "& .MuiDrawer-paper": {
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0)",
            boxShadow: "0 0 0",
          },
        }}
      >
        <Box>
          <Box onClick={closeDrawer}><NavLink onClick={closeDrawer} title="Home" url="/" /></Box>
          <Box onClick={closeDrawer}><NavLink onClick={closeDrawer} title="Products" url="/Products" /></Box>
          <Box onClick={closeDrawer}><NavLink onClick={closeDrawer} title="About" url="/About" /></Box>
          <Box onClick={closeDrawer}><NavLink onClick={closeDrawer} title="Contacts" url="/Contacts" /></Box>
        </Box>
      </Drawer>
    </Box>
  );
}
