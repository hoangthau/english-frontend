import React from "react";

import "./styles.css";

const SlideShowView = ({ images, currentImage, position }) => {
  console.log(images);
  return (
    <div className={`slide-show ${position === "left" ? "left" : "right"}`}>
      {images.map((img, i) => (
        <img
          className={currentImage === i ? "active" : ""}
          src={img.url}
          alt={img.id}
        />
      ))}
    </div>
  );
};

export default SlideShowView;
