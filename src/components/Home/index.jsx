import React from "react";
import ItemList from "../ItemList";
import Loading from "../Loading";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://fun-english.herokuapp.com/items")
      .then(res => res.json())
      .then(res => {
        const items = res.sort((a, b) => b.date - a.date);
        this.setState({ items });
      });
  }
  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        {items.length ? <ItemList items={items} /> : <Loading />}
      </React.Fragment>
    );
  }
}

export default Home;
