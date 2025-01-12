import SideLink from "./SideLink";
function SideBar(){

    return(
    <div className="side-bar">
         <SideLink title="Shoes" url="/Products/Shoes" />
         <SideLink title="Clothes" url="/Products/Clothes" />
         <SideLink title="Swimsuits" url="/Products/Swimsuits" />   
    </div>)
    }

export default SideBar;