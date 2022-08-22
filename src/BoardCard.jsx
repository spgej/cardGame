import React from "react";
import "./styles.css";

const BoardCard = ({value}) => {
  return (
    <div className="boardCard">
      <p>{value}</p>
    </div>
  );
};

export default BoardCard;
