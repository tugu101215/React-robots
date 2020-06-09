import React from "react";
import { Cart } from "../cart/index";
import "./style.css";

export const CartList = props => (
  <div className="Cart-list">
    {props.robots.map(el => (
      <Cart key={el.id} robot={el} />
    ))}
  </div>
);
