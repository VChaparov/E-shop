import { useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { InputBase } from "@mui/material";
import featchSearch from "../../Utilities/featchSearch";
import DropdownList from "../../Utilities/DropdownList";
import sleep from "../../Utilities/sleep";
import { useQuery } from "react-query";
import Loader from "../../Utilities/Loader";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState({});

  const updateSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value == "") {
      setItems({});
    }
  };

  const query = useQuery({
    queryKey: [{ search }],
    queryFn: () =>
      sleep(300).then(() => {
        if (search.length > 0) {
          setItems(featchSearch(search));
        } else {
          setItems({});
        }
      }),
  });

  function showDropdown() {
    document.getElementById("dropdown").style.display = "flex";
  }
  function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
  }

  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
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
              hideDropdown();
              setSearch("");
              setItems({});
            }
            if (e.key === "Enter") {
              hideDropdown();
              navigate(`/Search/${encodeURIComponent(search.trim())}`);
              setSearch("");
            }
          }}
          onChange={(e) => {
            updateSearch(e);
            showDropdown();
          }}
          onBlur={() => sleep(100).then(() => hideDropdown())}
          onClick={() => showDropdown()}
        />
        <Box
          id="dropdown"
          onClick={() => {
            setSearch("");
            hideDropdown();
          }}
          sx={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgba(9, 149, 133, 0.7)",
            color: "white",
            width: { xs: "20em", sm: "22em", md: "30em", lg: "40em  " },
            position: "absolute",
            zIndex: " 5",
            borderWidth: "0",
            borderRadius: "10px",
            fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
            top: "px",
          }}
        >
          {query.isLoading ? (
            <Loader />
          ) : query.isError ? (
            <pre>{JSON.stringify(query.error)}</pre>
          ) : items.length > 0 ? (
            <DropdownList cards={items} />
          ) : (
            <Box sx={{ margin: "15px", fontSize: "20pt" }}>
              <br />
              <br />
              No Search Results
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
