import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN } from "./reducers";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginFlag: () => {
      // console.log("Set Login flag called");
      dispatch({ type: LOGIN });
    },
  };
};

class Login extends Component {
  state = {
    username: "",
    password: "",
    isError: {
      username: "",
      password: "",
      form: "",
    },
  };

  onInputChange = (event) => {
    const { name, value } = event.target;

    let isError = { ...this.state.isError };

    switch (name) {
      case "username":
        isError.username = value.length > 0 ? "" : "Kindly enter the username";
        break;
      case "password":
        isError.password = value.length > 0 ? "" : "Kindly enter the password";
        break;
      default:
        break;
    }

    this.setState({ isError, [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    let isError = { ...this.state.isError };

    if (username.length === 0) {
      isError.username = "Kindly enter the username";
    }

    if (password.length === 0) {
      isError.password = "Kindly enter the password.";
    }

    if (
      isError.form === "" &&
      username === this.props.username &&
      password === this.props.password
    ) {
      this.props.setLoginFlag();

      //this.props.history.push("/home");
    } else {
      isError.form = "User does not exist!!!";
    }

    this.setState({ isError });
  };

  render() {
    const { isError } = this.state;
    return (
      <>
        {this.props.isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <div className="jumbotron">
            <h3 className="title">Login Form</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="username">
                  Username
                </label>
                <div className="col-sm-6">
                  <input
                    className={
                      isError.username.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={this.onInputChange}
                  />
                  {isError.username.length > 0 && (
                    <div className="invalid-feedback">{isError.username}</div>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="password">
                  Password
                </label>
                <div className="col-sm-6">
                  <input
                    className={
                      isError.password.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.onInputChange}
                  />
                  {isError.password.length > 0 && (
                    <div className="invalid-feedback">{isError.password}</div>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                  <button
                    className={
                      isError.form.length > 0
                        ? "is-invalid btn btn-primary"
                        : "btn btn-primary"
                    }
                    type="submit"
                    name="submit"
                  >
                    Submit
                  </button>
                  <br />
                  <br />
                  {isError.form.length > 0 && (
                    <div className="invalid-feedback">
                      <h4>{isError.form}</h4>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
        <div className="routeLink">
          <Link to="/register">Register</Link>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
