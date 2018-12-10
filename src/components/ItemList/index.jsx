import React from "react";
import axios from "axios";

import View from "./View.jsx";
import Loading from "../Loading";
import WordModal from "../WordModal";
import { createWord } from "../../resources/word";
import { incrementClaps } from "../../resources/item";

class ItemList extends React.Component {
  state = {
    items: [],
    isOpenModal: false,
    newWord: {
      vocabulary: "",
      pronunciation: "",
      meanings: "",
      similarSound: "",
      imageUrl: "",
      username: ""
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
    console.log(this.state.newWord);
    createWord(this.state.newWord).then(() => {
      this.setState({ isOpenModal: false });
    });
  };

  changeInput = e => {
    const { value, name } = e.target;
    const username = localStorage.getItem("username");
    let currentWord = { ...this.state.newWord };
    currentWord[name] = value;
    currentWord["username"] = username;
    this.setState({ newWord: currentWord });
  };

  updateClapsById = (id, claps) => {
    const { items } = this.state;
    const index = items.findIndex(item => item._id === id);
    let item = items[index];
    item.claps = claps;
    this.setState({ items });
  };

  incrementClaps = item => {
    const claps = item.claps || 0;
    const data = {
      claps: claps + 1
    };
    this.updateClapsById(item._id, data.claps);
    incrementClaps(data, item._id);
  };

  render() {
    const { items, isOpenModal } = this.state;
    return (
      <React.Fragment>
        {items.length ? (
          <View
            items={items}
            incrementClaps={this.incrementClaps}
            toggleModalItem={this.toggleModalItem}
          />
        ) : (
          <Loading />
        )}
        <WordModal
          auth={this.props.auth}
          isOpen={isOpenModal}
          toggleModal={this.toggleModalItem}
          submit={this.submitWord}
          changeInput={this.changeInput}
        />
      </React.Fragment>
    );
  }
}

export default ItemList;
