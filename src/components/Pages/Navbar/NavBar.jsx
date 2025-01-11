import NavLink from "./NavLink";
import Logo from "/images/logo.svg";
function NavBar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo.svg"></img>
      </div>
      <div className="nav-bar">
        <NavLink title="Home" url="/" />
        <NavLink title="Products" url="/Products" />
        <NavLink title="About" url="/About" />
        <NavLink title="Contacts" url="/Contacts" />
      </div>
    </div>
  );
}

export default NavBar;
