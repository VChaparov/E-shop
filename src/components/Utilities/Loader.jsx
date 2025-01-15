import { PuffLoader } from "react-spinners";
import {Box} from "@mui/material"
import "./utilitiesStyles.css";

function Loader() { 
  return (
    <Box className="loader">
      <PuffLoader
        size={150}
        color="rgb(242, 253, 242)"
        aria-label="Loading Spinner"
      />
    </Box>
  );
}
export default Loader;
