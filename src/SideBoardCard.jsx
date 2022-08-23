import React from "react";
import "./styles.css";

export default function SideBoardCard({ card, total, setTotal, setSideBoard }) {
  // Allows sideboard cards to affect total
  // REMOVE SIDE CARD FROM BOARD ONCE USED

  const { id, value, isVisible } = card;

  function useSideCard() {
    if (total + value < 0) {
      console.log("Cannot bring total below zero!");
    } else {
      setTotal(total + value);
      setSideBoard((prevDeck) => {
        const cardsDup = JSON.parse(JSON.stringify(prevDeck)); // little trick to duplicate array
        const updateCard = cardsDup.find((c) => c.id === id);
        updateCard.isVisible = false;
        return cardsDup;
      });
    }
  }
  return (
    <button
      id={id}
      onClick={() => useSideCard()}
      className={isVisible ? "sideCard" : "usedCard"}
    >
      {value}
    </button>
  );
}
