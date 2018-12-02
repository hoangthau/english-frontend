import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ items, toggleModalItem }) => (
  <div className="item-list">
    {items.map((item, i) => (
      <Item key={i} {...item} toggleModalItem={e => toggleModalItem(item)} />
    ))}
  </div>
);

export default ItemList;
