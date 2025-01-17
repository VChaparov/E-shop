import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { Popper, InputBase, Fade, Paper, Typography } from "@mui/material";
import featchSearch from "../../Utilities/featchSearch";
import ResultsList from "../../Utilities/ResultsList";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState({});

  const updateSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== undefined) setItems(featchSearch(e.target.value));
    if (e.target.value == "") {
      setItems({});
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const navigate = useNavigate();

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
              zIndex: "10",
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
              setOpen(false);
              setSearch("");
              setItems({});
            }
            if (e.key === "Enter") {
              setOpen(false);
              navigate(`/Search/${encodeURIComponent(search.trim())}`);
              setSearch("");
            }
          }}
          onChange={(e) => {
            updateSearch(e);
            setOpen(true);
          }}
          //onBlur={() => setOpen(false)}
        />
      </Box>
      <Popper
        sx={{ position: "relative", zIndex: 5 }}
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
                onClick={() => setSearch("")}
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "rgba(9, 149, 133, 0.7)",
                  color: "white",
                  width: "99%",
                  position: "relative",
                  zIndex: " 5",
                  textIndent: "10px",
                  borderWidth: "0",
                  borderRadius: "0 0 10px 10px",
                  fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
                  top: "-6px",
                  padding: "10px",
                }}
              >
                {items.length > 0 ? (
                  <ResultsList cards={items} />
                ) : (
                  <Box>Search Results</Box>
                )}
              </Paper>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
}
