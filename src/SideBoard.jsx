import React from "react";
import "./styles.css";
import { useState } from "react";
import { sideDeck } from "./sideDeck.js";


export default function SideBoard() {

    const [sDeck, setSDeck] = useState(sideDeck);
    const [sideBoard, setSideBoard] = useState([]);


    const drawSide = (i) => {
        if (sideBoard.length === 4) {
            console.log('Only 4 cards allowed per side board')
        }  else {
            for (let i = 0; i < 4; i++) {
                let newSideCard = Math.floor(Math.random() * sDeck.length);
                const removedSideCard = sDeck.splice(newSideCard, 1);
                setSideBoard(current => [...current, removedSideCard]);
                setSDeck(sDeck)
                //console.log(sideBoard);
              }     
        }
      };

      const SideBoardCard = (props) => {
        return (
          <button className="sideCard">{props.value}</button>
        );
      };

      const createSCard = (card) => {
        return <SideBoardCard key={card[0].id} value={card[0].value} />;
      };

      return (
        <div className="sboard">
            <h3>Side Board</h3>
            {sideBoard.map(createSCard)}
            <button  className="btn" onClick = {() => drawSide()}>Draw Side</button>
        </div>
      );

}
