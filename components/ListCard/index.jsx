import React from "react";
import Card from "../Card/Card";

const ListCard = ({ data = [], removeItem }) => {
  return (
    <>
      {data.map((card) => (
        <Card key={card.id} data={card} removeHandler={removeItem} />
      ))}
    </>
  );
};

export default ListCard;
