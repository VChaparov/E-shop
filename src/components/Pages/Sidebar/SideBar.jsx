import SideLink from "./SideLink";
import { Box } from "@mui/material";
function SideBar() {
  return (
    <Box
      className="side-bar"
      sx={{
        width: { xs: "10em", sm: "10em", md: "13em", lg: "15em" },
        minWidth: "5em",
      }}
    >
      <SideLink title="Shoes" url="/Products/Shoes" />
      <SideLink title="Clothes" url="/Products/Clothes" />
      <SideLink title="Swimsuits" url="/Products/Swimsuits" />
    </Box>
  );
}

export default SideBar;
