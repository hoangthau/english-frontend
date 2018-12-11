import React from "react";
import View from "./View.jsx";

import { upload } from "../../resources/image";
import { createItem } from "../../resources/item";

class NewItem extends React.Component {
  state = {
    title: "",
    fullName: "Thau Nguyen",
    image: null,
    loading: false
  };

  resetState = () => {
    this.setState({
      title: "",
      fullName: "Thau Nguyen",
      image: null,
      loading: false
    });
  };
  changeEmail = event => {
    this.setState({ title: event.target.value });
  };
  changeFullName = event => {
    this.setState({ fullName: event.target.value });
  };
  changeImage = event => {
    this.setState({ image: event.target.files[0] });
  };
  submit = event => {
    event.preventDefault();
    const { image, title, fullName } = this.state;
    if (image) {
      this.setState({ loading: true });
      upload(image)
        .then(res => {
          const data = {
            title,
            fullName,
            imageUrl: res.data.url
          };
          return createItem(data);
        })
        .then(res => this.resetState());
    }
  };

  render() {
    return (
      <View
        {...this.state}
        changeEmail={this.changeEmail}
        changeFullName={this.changeFullName}
        changeImage={this.changeImage}
        submit={this.submit}
      />
    );
  }
}

export default NewItem;
