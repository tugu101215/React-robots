import React from "react";
import "./style.css";

export const Cart = props => (
  <div className="cart-container">
    <img
      src={`https://robohash.org/0S${props.robot.id}.png?set=set3&size=150x150`}
      alt=""
    />
    <h2>{props.robot.name}</h2>
    <p>{props.robot.email}</p>
  </div>
);
