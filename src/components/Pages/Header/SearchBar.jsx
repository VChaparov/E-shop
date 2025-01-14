import { dropdownShow, dropdownHide } from "../../Utilities/dropdownToggle";
import { Box, Input, InputBase } from "@mui/material";

function SearchBar() {
  return (
    <Box
      className="search-box"
      sx={{
        width: { xs: "70%",sm: "80%",md: "90%",lg: "85%" },
        marginBottom: { xs: "20px", md: "0" },
      }}
    >
      <InputBase
        placeholder="search"
        sx={{
          width: "100%",
          "& .css-yimnyd-MuiInputBase-input": {fontSize: {xs:"10pt", sm:"12pt", md:"15pt"}},
        }}
        inputProps={{ id: "search-bar" }}
        onFocus={() => dropdownShow()}
        onBlur={() => dropdownHide()}
      />
      <div id="search-dropdown-container">
        <ul id="search-dropdown">
          <br />
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
      </div>
    </Box>
  );
}
export default SearchBar;
