import React from "react";
import axios from "axios";

import ItemList from "../ItemList";
import Loading from "../Loading";
import ItemModal from "../ItemModal";
import { createWord } from "../../resources/word";

class Home extends React.Component {
  state = {
    items: [],
    isOpenModal: false,
    newWord: {
      vocabulary: "",
      pronunciation: "",
      meanings: "",
      similarSound: "",
      imageUrl: ""
    }
  };
  componentDidMount = () => {
    this.getItems().then(res => {
      const items = res.sort((a, b) => b.date - a.date);
      this.setState({ items });
    });
  };

  getItems = async () => {
    const response = await axios.get("https://fun-english.herokuapp.com/items");
    const items = response.data;
    return items;
  };

  toggleModalItem = item => {
    let currentWord = { ...this.state.newWord };
    currentWord.imageUrl = item.imageUrl;
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      newWord: currentWord
    });
  };

  submitWord = e => {
    e.preventDefault();
    createWord(this.state.newWord).then(() => {
      this.setState({ isOpenModal: false });
    });
  };

  changeInput = e => {
    const { value, name } = e.target;
    let currentWord = { ...this.state.newWord };
    currentWord[name] = value;
    this.setState({ newWord: currentWord });
  };

  render() {
    const { items, isOpenModal } = this.state;
    return (
      <React.Fragment>
        {items.length ? (
          <ItemList items={items} toggleModalItem={this.toggleModalItem} />
        ) : (
          <Loading />
        )}
        <ItemModal
          isOpen={isOpenModal}
          toggleModal={this.toggleModalItem}
          submit={this.submitWord}
          changeInput={this.changeInput}
        />
      </React.Fragment>
    );
  }
}

export default Home;
