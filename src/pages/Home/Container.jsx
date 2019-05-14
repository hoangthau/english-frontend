import React from "react";
import View from "./View";

class Home extends React.Component {
  state = {
    leftImages: [
      {
        id: "image1",
        url:
          "https://uploads.codesandbox.io/uploads/user/1a0b2f0a-24ae-4a56-b791-24bdb8e0495e/_no5-on%20top%20of%20tha.jpg"
      },
      {
        id: "image2",
        url:
          "https://uploads.codesandbox.io/uploads/user/1a0b2f0a-24ae-4a56-b791-24bdb8e0495e/tGRO-make%20up%20a%20story.jpg"
      }
    ],
    rightImages: [
      {
        id: "image1",
        url:
          "https://uploads.codesandbox.io/uploads/user/1a0b2f0a-24ae-4a56-b791-24bdb8e0495e/i9UQ-on%20the%20mend.jpg"
      },
      {
        id: "image2",
        url:
          "https://uploads.codesandbox.io/uploads/user/1a0b2f0a-24ae-4a56-b791-24bdb8e0495e/vyFl-all%20the%20rage.jpg"
      }
    ]
  };
  componentDidMount() {
    const username = localStorage.getItem("username");
    if (username) {
      this.props.setUsername(username);
    }
  }

  render() {
    return (
      <View
        auth={this.props.auth}
        leftImages={this.state.leftImages}
        rightImages={this.state.rightImages}
      />
    );
  }
}

export default Home;
