import NavBar from "./Navbar/NavBar";
import SearchBar from "./SearchBar";
import Logo from "/images/logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo.svg"></img>
        </div>
        <div className="header-bars">
          <SearchBar />
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Header;
