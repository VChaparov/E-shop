import Header from "./Pages/Header/Header.jsx";
import SideBar from "./Pages/Sidebar/SideBar.jsx";

import Content from "./Utilities/Content.jsx";

function Layout(){
    return(
        <div className="container">
            <Header />
            <div className="body-container">
            <SideBar />
            <div className="content-container">
            <Content />
            </div>
      </div>
      </div>
        )
    }

export default Layout;