import "./Card.css";

const Card = (props) => {
  const classes = "card" + props.className;
  return <div ClassName={classes}>{props.children}</div>;
};

export default Card;
