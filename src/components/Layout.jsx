import Header from "./Pages/Header/Header.jsx";
import SideBar from "./Pages/Sidebar/SideBar.jsx";

import Content from "./Pages/Content/Content.jsx";

function Layout() {
  return (
    <>
      <Header />
      <div className="body-container">
        <SideBar />
        <div className="content-wrapper">
          <Content />
        </div>
      </div>
    </>
  );
}

export default Layout;
