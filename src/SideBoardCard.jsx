import React from "react";
import "./styles.css";
import { useState } from "react";

export default function SideBoardCard({ value, id, total, setTotal, hide, setHide }) {
    // Allows sideboard cards to affect total
    // REMOVE SIDE CARD FROM BOARD ONCE USED
    function useSideCard() {
      if (total + value < 0) {
        console.log("Cannot bring total below zero!");
      } else {
        setTotal(total + value);
        setHide(!hide);
      }
    }
    return (
      <button id={id} onClick={() => useSideCard()} className={hide ? "usedCard" : "sideCard"}>
        {value}
      </button>
    );
  };
  