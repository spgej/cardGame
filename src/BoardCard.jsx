import React from "react";
import "./styles.css";

const BoardCard = (props) => {
  return (
    <div className="boardCard">
      <p>{props.value}</p>
    </div>
  );
};

export default BoardCard;
