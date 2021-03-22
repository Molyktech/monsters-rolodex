import React from "react";
import "./Card.styles.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2`} />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};
