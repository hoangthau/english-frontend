import React from "react";
import ItemList from "../ItemList";

class Home extends React.Component {
  render() {
    return <ItemList auth={this.props.auth} />;
  }
}

export default Home;
