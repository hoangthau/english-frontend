import React from "react";
import moment from "moment";
import "./styles.css";

const getDuration = (day, hour, min) => {
  return `${day ? day + "d" : hour ? hour + "h" : min + "m"}`;
};
const Item = ({
  fullName,
  date,
  title,
  imageUrl,
  toggleModalItem,
  incrementClaps,
  claps
}) => {
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
      <a
        className="float-right"
        onClick={toggleModalItem}
        title="Add to my words"
      >
        <span role="img" aria-label="item-icon">
          ⭐
        </span>
      </a>
      <h1>{title} </h1>
      <img alt="item-img" src={imageUrl} />
      <span
        onClick={incrementClaps}
        className="secondary-text icon-md"
        role="img"
        aria-label="item-icon"
      >
        👏 {claps}
      </span>
    </div>
  );
};

export default Item;
