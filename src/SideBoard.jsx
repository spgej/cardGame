import React from "react";
import "./styles.css";
import SideBoardCard from "./SideBoardCard";

export default function SideBoard({ sideBoard, setTotal, total, hide, setIsVisible }) {

    return (
      <div className="sboard">
        <h3>Side Board</h3>
        {sideBoard.map((card) => {
          return (
            <SideBoardCard
              id={card[0].id}
              key={card[0].id}
              value={card[0].value}
              isVisible={card[0].isVisible}
              total={total}
              setIsVisible={setIsVisible}
              setTotal={setTotal}
            />
          );
        })}
      </div>
    );
  };
  