import React from "react";
import "./styles.css";

const BoardCard = (props) => {
  return (
    <div className="boardCard">
      <h1>{props.value}</h1>
    </div>
  );
};

export default BoardCard;
