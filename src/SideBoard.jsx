import React from "react";
import "./styles.css";
import SideBoardCard from "./SideBoardCard";

export default function SideBoard({ sideBoard, setTotal, total, hide, setHide }) {

    return (
      <div className="sboard">
        <h3>Side Board</h3>
        {sideBoard.map((card) => {
          return (
            <SideBoardCard
              id={card[0].id}
              key={card[0].id}
              value={card[0].value}
              total={total}
              hide={hide}
              setHide={setHide}
              setTotal={setTotal}
            />
          );
        })}
      </div>
    );
  };
  