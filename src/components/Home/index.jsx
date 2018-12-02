import React from "react";

import ItemList from "../ItemList";
import Loading from "../Loading";
import ItemModal from "../ItemModal";

class Home extends React.Component {
  state = {
    items: [],
    isOpenModal: false,
    newWord: {
      voca: "",
      pronunciation: "",
      meanings: "",
      similarSound: "",
      imageUrl: ""
    }
  };
  componentDidMount = () => {
    fetch("https://fun-english.herokuapp.com/items")
      .then(res => res.json())
      .then(res => {
        const items = res.sort((a, b) => b.date - a.date);
        this.setState({ items });
      });
  };

  toggleModalItem = item => {
    this.setState({ isOpenModal: !this.state.isOpenModal });
    console.log(item);
  };

  createWord = e => {
    e.preventDefault();
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
          submit={this.createWord}
        />
      </React.Fragment>
    );
  }
}

export default Home;
