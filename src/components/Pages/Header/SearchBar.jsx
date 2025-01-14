import { dropdownShow, dropdownHide } from "../../Utilities/dropdownToggle";

function SearchBar() {
  return (
    <div className="search-box">
      <input
        onFocus={() => {
          dropdownShow();
        }}
        onBlur={() => dropdownHide()}
        id="searchBar"
        type="text"
      ></input> 
      <div id="search-dropdown-container">
        
        <ul id="search-dropdown">
        <br/>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
      </div>
    </div>
  );
}
export default SearchBar;
