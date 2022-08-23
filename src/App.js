import React from "react";
import "./styles.css";
import { useState } from "react";
import BoardCard from "./BoardCard";
import SideBoard from "./SideBoard";
import { initDeck } from "./initDeck.js";
import { sideDeck } from "./sideDeck";
import { is } from "express/lib/request";

export default function App() {
  const [total, setTotal] = useState(0);
  const [deck, setDeck] = useState(initDeck);
  const [board, setBoard] = useState([]);
  const [sDeck, setSDeck] = useState(sideDeck);
  const [sideBoard, setSideBoard] = useState([]);
  const [isVisible, setIsVisible] = useState(sideDeck[0].isVisible);

  // reset the game, board, and deck

  const reset = () => {
    setTotal(0);
    setDeck(initDeck);
    setBoard([]);
    setSDeck(sideDeck);
    setSideBoard([]);
  };

  // draws a card and removes it from the deck
  // to add to the total score and board state

  const drawCard = () => {
    if (deck.length === 0) {
      console.log("Out of Cards");
    } else if (total < 20) {
      if (sideBoard.length === 4) {
        console.log("Only 4 cards allowed per side board");
      } else {
        for (let i = 0; i < 4; i++) {
          let newSideCard = Math.floor(Math.random() * sDeck.length);
          const removedSideCard = sDeck.splice(newSideCard, 1);
          setSideBoard((current) => [...current, removedSideCard]);
          setSDeck(sDeck);
          // console.log(sideBoard);
        }
      }
      let newCard = Math.floor(Math.random() * deck.length);
      setTotal(total + deck[newCard].value);
      // console.log(deck[newCard].value);
      const removedCard = deck.splice(newCard, 1);
      setBoard([...board, removedCard]);
      // console.log(board);
      // console.log(removedCard[0].value);
      setDeck(deck);
    }
  };

  // UI for the game
  return (
    <div className="App">
      <h3>Total</h3>
      <h1>{total}</h1>
      <div className="board">
        {board.map((card) => {
          return <BoardCard key={card[0].id} value={card[0].value} />;
        })}
      </div>
      <div>
        <button className="btn" onClick={() => drawCard()}>
          Draw
        </button>
        <button className="btn" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <SideBoard
        sideBoard={sideBoard}
        total={total}
        setTotal={setTotal}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
}
