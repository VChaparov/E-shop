import NavLink from "./NavLink";
function NavBar() {
  return (
    
      <div className="nav-bar">
        <NavLink title="Home" url="/" />
        <NavLink title="Products" url="/Products" />
        <NavLink title="About" url="/About" />
        <NavLink title="Contacts" url="/Contacts" />
      </div>
  );
}

export default NavBar;
