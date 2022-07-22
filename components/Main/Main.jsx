import React, { useState } from "react";
import ListCard from "../ListCard";
import style from "./main.module.css";
function Main({ cards }) {
  const [card, setCard] = useState(cards);
  const removeCard = (id) => {
    setCard(
      card.filter((c) => {
        return c.id !== id;
      })
    );
  };
  return (
    <div className={style.content}>
      <ListCard data={card} removeItem={removeCard} />
    </div>
  );
}

export default Main;
