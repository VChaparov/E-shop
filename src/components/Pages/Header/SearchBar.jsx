import { useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { InputBase } from "@mui/material";
import featchSearch from "../../Utilities/featchSearch";
import DropdownList from "../../Utilities/DropdownList";
import sleep from "../../Utilities/sleep";
import { useQuery } from "react-query";
import Loader from "../../Utilities/Loader";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

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
        id="search"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{
              "& .MuiInputBase-input": {
                position: "relative",
                color: "white",
                zIndex: "10",
                textIndent: "10px",
                borderWidth: "0",
                borderRadius: "10px",
                backgroundColor: "#099585",
                fontSize: { xs: "8pt", sm: "10pt", md: "12pt" },
                width: { xs: "15rem", sm: "18rem", md: "30rem", lg: "40rem" },
                height: "15px",
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
          <IconButton
            type="button"
            sx={{ position: "relative", left: "-40px", zIndex: "20" }}
            onClick={() => {
              hideDropdown();
              navigate(`/Search/${encodeURIComponent(search.trim())}`);
              setSearch("");
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>

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
            width: { xs: "15rem", sm: "18rem", md: "30rem", lg: "40rem" },
            position: "absolute",
            zIndex: " 5",
            borderWidth: "0",
            borderRadius: "10px",
            fontSize: { xs: "8pt", sm: "8pt", md: "8pt" },
            top: "10px",
          }}
        >
          {query.isLoading ? (
            <Loader />
          ) : query.isError ? (
            <pre>{JSON.stringify(query.error)}</pre>
          ) : items.length > 0 ? (
            <DropdownList cards={items} />
          ) : (
            <Box sx={{ margin: "15px", fontSize: "10pt" }}>
              <br />
              No Search Results
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
