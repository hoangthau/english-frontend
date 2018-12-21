import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import history from "./history";
import Auth from "./Auth/Auth";

import "./styles.css";

import Home from "./pages/Home";
import MyWord from "./pages/MyWord";
import NewItem from "./pages/NewItem";
import Callback from "./pages/Callback";

import Nav from "./components/Nav";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const initializeReactGA = () => {
  ReactGA.initialize("UA-130650499-1");
  ReactGA.pageview("/");
};

initializeReactGA();

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Nav auth={auth} />
          <Route path="/login" render={props => <Login auth={auth} />} />
          <Route
            path="/"
            exact
            render={props => <Home auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route path="/create-item" component={NewItem} />
          <PrivateRoute path="/my-words" component={MyWord} auth={auth} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
