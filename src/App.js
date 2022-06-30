import React from "react";
import "./styles.css";
import { useState } from "react";
import BoardCard from "./BoardCard";

export default function App() {
  const initDeck = [
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    },
    {
      id: 3,
      value: 3
    },
    {
      id: 4,
      value: 4
    },
    {
      id: 5,
      value: 5
    }
  ];
  const [total, setTotal] = useState(0);
  const [deck, setDeck] = useState(initDeck);
  const [board, setBoard] = useState([]);

  //reset the game, board, and deck

  const reset = () => {
    setTotal(0);
    setDeck(initDeck);
    setBoard([]);
  };

  //createCard maps the board with all drawn cards

  const createCard = (card) => {
    return <BoardCard key={card[0].id} value={card[0].value} />;
  };

  //draws a card and removes it from the deck
  // to add to the total score and board state

  const drawCard = () => {
    if (deck.length === 0) {
      console.log("Out of Cards");
    } else {
      let newCard = Math.floor(Math.random() * deck.length);
      setTotal(total + deck[newCard].value);
      //console.log(deck[newCard].value);
      const removedCard = deck.splice(newCard, 1);
      setBoard([...board, removedCard]);
      //console.log(board);
      //console.log(removedCard[0].value);
      setDeck(deck);
    }
  };

  return (
    <div className="App">
      <h1>{total}</h1>
      <div className="board">{board.map(createCard)}</div>
      <button onClick={() => drawCard()}>Draw</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
