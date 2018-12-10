import { connect } from "react-redux";
import Home from "./Container.jsx";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUsername: username =>
    dispatch({
      type: "SET_USERNAME",
      payload: username
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
