import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Auth from "./Auth/Auth";

import "./styles.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import NewItem from "./components/NewItem";
import Callback from "./components/Callback";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Nav auth={auth} />
          <Route
            path="/"
            exact
            render={props => <Home auth={auth} {...props} />}
          />
          <Route path="/create-item" component={NewItem} />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
