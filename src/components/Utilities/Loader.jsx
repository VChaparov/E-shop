import { PuffLoader } from "react-spinners";
import "./utilitiesStyles.css";

function Loader() {
  return (
    <div className="loader">
      <PuffLoader
        size={150}
        color="rgb(25, 121, 25)"
        aria-label="Loading Spinner"
      />
    </div>
  );
}
export default Loader;
