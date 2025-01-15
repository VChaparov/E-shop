import NavLink from "./Navbar/NavLink";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Popper, InputBase, Fade, Paper, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      <Box
        sx={{ width: "100%", height: "100%" }}
        onClick={handleClick("bottom")}
      >
        <InputBase
          placeholder="Search"
          sx={{
            width: "100%",
            "& .MuiInputBase-input": {
              position: "relative",
              color: "white",
              position: "relative",
              zIndex: "3",
              textIndent: "10px",
              borderWidth: "0",
              borderRadius: "10px",
              backgroundColor: "#099585",
              fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
              height: "15px",
              width: "100%",
              margin: "0",
            },
          }}
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setSearch("");
            }
          }}
          onChange={(e) => updateSearch(e)}
          onFocus={() => handleClick("bottom")}
          onBlur={() => setOpen(false)}
        />
      </Box>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <Box
              sx={{
                width: {
                  xs: "20em",
                  sm: "22em",
                  md: "30em",
                  lg: "40em  ",
                  display: "flex",
                  justifyContent: "start",
                },
              }}
            >
              <Paper
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  backgroundColor: "rgba(9, 149, 133, 0.7)",
                  color: "white",
                  width: "99%",
                  position: "relative",
                  zIndex: " 1",
                  textIndent: "10px",
                  borderWidth: "0",
                  borderRadius: "0 0 10px 10px",
                  fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
                  top: "-7px",
                  padding: "10px",
                }}
              >
                <br />
                Search Results Here!
                <br />
                Search Results Here!
              </Paper>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
}
