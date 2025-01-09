
import "./CardStyles.css";

function Card(props) {
  return (
    <div className="card" style={{zIndex:`${props.id}`, position:"relative"}}>
      <div className="card-image"
        style={{
          backgroundImage: `url(src/assets/images/${props.imgURL}.jpg)`,
        }}
      ></div>
      <div className="name">{props.name}</div>
    </div>
  );
}

export default Card;
