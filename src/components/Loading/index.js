import React, { Component } from "react";
import loading from "./loading.gif";

class Loading extends Component {
  render() {
    const style = {
      display: "flex"
    };
    return (
      <div style={style}>
        <img style={{ margin: "auto" }} src={loading} alt="loading" />
      </div>
    );
  }
}

export default Loading;
