import React from "react";
import "./styles.css";

export default function SideBoardCard({ value, id, total, setTotal, show }) {
    // Allows sideboard cards to affect total
    // REMOVE SIDE CARD FROM BOARD ONCE USED
    function useSideCard() {
      if (total + value < 0) {
        console.log("Cannot bring total below zero!");
      } else {
        setTotal(total + value);
        show;
      }
    }
    return (
      <button id={id} onClick={() => useSideCard()} className="sideCard">
        {value}
      </button>
    );
  };
  