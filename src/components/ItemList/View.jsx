import React from "react";
import Item from "../Item";
import "./styles.css";

const View = ({ items, toggleModalItem, incrementClaps }) => {
  return (
    <div className="item-list">
      {items.map((item, i) => (
        <Item
          key={i}
          {...item}
          toggleModalItem={e => toggleModalItem(item)}
          incrementClaps={e => incrementClaps(item)}
        />
      ))}
    </div>
  );
};

export default View;
