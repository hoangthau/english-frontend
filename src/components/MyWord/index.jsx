import React from "react";
import View from "./View.jsx";

class MyWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  componentDidMount() {
    fetch("https://fun-english.herokuapp.com/words")
      .then(res => res.json())
      .then(res => {
        const words = res.sort((a, b) => b.date - a.date);
        this.setState({ words });
      });
  }

  render() {
    return <View words={this.state.words} />;
  }
}

export default MyWord;
