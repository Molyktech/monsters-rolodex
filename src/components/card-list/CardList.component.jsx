import React from "react";
import { Card } from "../card/Card.component";
import "./CardList.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
