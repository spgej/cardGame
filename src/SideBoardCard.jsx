import React from "react";
import "./styles.css";

export default function SideBoardCard({ value, id, total, setTotal, isVisible, setIsVisible }) {
    // Allows sideboard cards to affect total
    // REMOVE SIDE CARD FROM BOARD ONCE USED
    
    function useSideCard() {
      if (total + value < 0) {
        console.log("Cannot bring total below zero!");
      } else {
        setTotal(total + value);
        setIsVisible(!isVisible);
      }
    }
    return (
      <button id={id} onClick={() => useSideCard()} className={isVisible ? "sideCard" : "usedCard"}>
        {value}
      </button>
    );
  };
  