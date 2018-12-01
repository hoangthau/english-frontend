import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ items }) => (
  <div className="item-list">
    {items.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </div>
);

export default ItemList;
