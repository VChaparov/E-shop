import { Link } from "react-router";

function SideLink(props) {
  return (
    <Link to={{ pathname: props.url }} style={{ textDecoration: "none" }}>
      <div className="side-link">{props.title}</div>
    </Link>
  );
}

export default SideLink;
