import React from "react";
import "./styles.css";
import SideBoardCard from "./SideBoardCard";

export default function SideBoard({
  sideBoard,
  setTotal,
  total,
  setSideBoard,
}) {
  return (
    <div className="sboard">
      <h3>Side Board</h3>
      {sideBoard
        .filter((card) => card.isVisible)
        .map((card) => {
          return (
            <SideBoardCard
              key={card.id}
              card={card}
              total={total}
              setSideBoard={setSideBoard}
              setTotal={setTotal}
            />
          );
        })}
    </div>
  );
}
