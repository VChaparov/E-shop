import Header from "./Pages/Header/Header.jsx";
import SideBar from "./Pages/Sidebar/SideBar.jsx";

import Content from "./Pages/Content/Content.jsx";

function Layout() {
  return (
    <>
      <Header />
      <div className="body-container">
        <SideBar />
        <Content />
      </div>
    </>
  );
}

export default Layout;
