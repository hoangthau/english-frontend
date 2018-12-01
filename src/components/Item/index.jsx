import React from "react";
import moment from "moment";

import "./styles.css";

const getDuration = (day, hour, min) => {
  return `${day ? day + "d" : hour ? hour + "h" : min + "m"}`;
};
const Item = ({ fullName, date, title, imageUrl }) => {
  const time = new Date() - new Date(date);
  const days = moment.duration(time).days();
  const hours = moment.duration(time).hours();
  const mins = moment.duration(time).minutes();
  const duration = getDuration(days, hours, mins);

  return (
    <div className="item">
      <span className="secondary-text" role="img" aria-label="item-icon">
        🐵{fullName} -
      </span>
      <span className="secondary-text">{duration}</span>
      <h1>{title} </h1>
      <img alt="item-img" src={imageUrl} />
    </div>
  );
};

export default Item;
