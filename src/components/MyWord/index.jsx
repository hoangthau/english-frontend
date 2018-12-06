import React from "react";
import View from "./View.jsx";

import { deleteWord } from "../../resources/word";

class MyWord extends React.Component {
  state = {
    words: [],
    imageUrl: "",
    isOpenModal: false
  };

  deleteWord = id => {
    deleteWord(id).then(() => this.getWords());
  };

  componentDidMount() {
    this.getWords();
  }

  openModal = imageUrl => {
    this.setState({ imageUrl, isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  getWords = () => {
    fetch("https://fun-english.herokuapp.com/words")
      .then(res => res.json())
      .then(res => {
        const words = res.sort((a, b) => b.date - a.date);
        this.setState({ words });
      });
  };

  render() {
    return (
      <View
        {...this.state}
        openModal={this.openModal}
        closeModal={this.closeModal}
        words={this.state.words}
        deleteWord={this.deleteWord}
      />
    );
  }
}

export default MyWord;
