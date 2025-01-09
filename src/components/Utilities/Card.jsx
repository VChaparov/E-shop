import "./CardStyles.css";

function Card(props) {
  return (

    <div className="card">
      <img className="card-image" src={`${import.meta.env.BASE_URL}src/assets/images/${props.imgURL}.jpg`}></img>
      <div className="name">{props.name}</div>
    </div>
  );
}

export default Card;
