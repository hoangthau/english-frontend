import React from "react";
import View from "./View";

class Home extends React.Component {
  componentDidMount() {
    const username = localStorage.getItem("username");
    if (username) {
      this.props.setUsername(username);
    }
  }
  render() {
    return <View auth={this.props.auth} />;
  }
}

export default Home;
