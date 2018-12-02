import React, { Component } from "react";

class Loading extends Component {
  render() {
    const url =
      "https://res.cloudinary.com/tpdthau/image/upload/v1543708757/loading_wugmhn.gif";
    const style = {
      display: "flex"
    };
    return (
      <div style={style}>
        <img style={{ margin: "auto" }} src={url} alt="loading" />
      </div>
    );
  }
}

export default Loading;
