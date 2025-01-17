import MenuItem from "./MenuItem";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Popover } from "@mui/material";

export default function MenuDrawer() {
  const [anchorEl, setAnchorEl] = useState(null);

  const OpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={OpenPopover}
        sx={{ display: { xs: "flex", md: "none" }, margin: "5px", padding:"0" }}
      >
        <MenuIcon  />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPopover-paper": {
            display: {
              xs: "flex",
              md: "none",
            },
            borderRadius:"10px",
            scale:"1.5",
            backgroundColor: "rgba(0, 6, 53, 0.7)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Box sx={{ height: "1.9em", display: "flex" }} onClick={closePopover}>
            <MenuItem onClick={closePopover} title="Home" url="/" />
          </Box>
          <Box sx={{ height: "1.9em", display: "flex" }} onClick={closePopover}>
            <MenuItem onClick={closePopover} title="Products" url="/Products" />
          </Box>
          <Box sx={{ height: "1.9em", display: "flex" }} onClick={closePopover}>
            <MenuItem onClick={closePopover} title="About" url="/About" />
          </Box>
          <Box sx={{ height: "1.9em", display: "flex" }} onClick={closePopover}>
            <MenuItem onClick={closePopover} title="Contacts" url="/Contacts" />
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
