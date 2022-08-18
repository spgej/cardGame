import React from "react";
import "./styles.css";
import { useState } from "react";
import { sideDeck } from "./sideDeck.js";
import BoardCard from "./BoardCard.jsx";


export default function SideBoard() {

    const [sDeck, setSDeck] = useState(sideDeck);
    const [sideBoard, setSideBoard] = useState([]);


    const drawSide = (i) => {
        if (sideBoard.length === 4) {
            console.log('only 4 cards')
        }  else {
            for (let i = 0; i < 4; i++) {
                let newSideCard = Math.floor(Math.random() * sDeck.length);
                const removedSideCard = sDeck.splice(newSideCard, 1);
                setSideBoard(current => [...current, removedSideCard]);
                //console.log(sideBoard);
              }     
        }
      };

      const createSCard = (card) => {
        return <BoardCard key={card[0].id} value={card[0].value} />;
      };

      return (
        <div>
            {sideBoard.map(createSCard)}
            <button onClick = {() => drawSide()}>Draw Side</button>
        </div>
      );

}
