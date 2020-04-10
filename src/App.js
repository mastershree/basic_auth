import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Edit from "./Edit";
import Notfound from "./NotFound";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const CustomRoute = ({ isUserLoggedIn, ...rest }) => {
  if (isUserLoggedIn) {
    return <Route {...rest} />;
  }
  return <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return { isUserLoggedIn: state.isLoggedIn };
};

class App extends Component {
  render() {
    const { isUserLoggedIn } = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <CustomRoute
            exact
            path="/home"
            isUserLoggedIn={isUserLoggedIn}
            component={Home}
          />
          <CustomRoute
            exact
            path="/edit"
            isUserLoggedIn={isUserLoggedIn}
            component={Edit}
          />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
