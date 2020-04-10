import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE } from "./reducers";
import { Link } from "react-router-dom";

const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
      //break;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
      //break;
    } else {
      isValid = true;
    }
  });

  return isValid;
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    contact: state.contact,
    email: state.email,
    username: state.username,
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (details) => {
      console.log(details);
      dispatch({ type: UPDATE, payload: { ...details } });
    },
  };
};

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      contact: this.props.contact,
      email: this.props.email,
      username: this.props.username,
      password: this.props.password,
      isError: {
        name: "",
        contact: "",
        email: "",
        username: "",
        password: "",
      },
      success: "",
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (formValid(this.state)) {
      this.props.update(this.state);
      this.setState({ success: "Details Updated Successfully!!!" });
    } else {
      console.log("Form is invalid!");
    }
  };

  onChangeHandler = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name = value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "contact":
        isError.contact = !(
          value.length >= 7 &&
          value.length <= 10 &&
          !isNaN(value)
        )
          ? "Phone number should be between 7 to 10 digits"
          : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "username":
        isError.username =
          value.length < 8
            ? "Username should be of length greater than or equal to 8 characters"
            : "";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "At least 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ isError, [name]: value });
  };

  render() {
    const { isError, success } = this.state;

    return (
      <>
        <div className="jumbotron">
          <h3 className="title">Edit Form</h3>
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="name">
                Name
              </label>
              <div className="col-sm-6">
                <input
                  className={
                    isError.name.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  defaultValue={this.state.name}
                  onChange={this.onChangeHandler}
                  required
                />

                {isError.name.length > 0 && (
                  <span className="invalid-feedback">{isError.name}</span>
                )}
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="contact">
                Contact
              </label>
              <div className="col-sm-6">
                <input
                  className={
                    isError.contact.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Contact Number"
                  defaultValue={this.state.contact}
                  onChange={this.onChangeHandler}
                  required
                />
                {isError.contact.length > 0 && (
                  <div className="invalid-feedback">{isError.contact}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="email">
                Email
              </label>
              <div className="col-sm-6">
                <input
                  className={
                    isError.email.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  defaultValue={this.state.email}
                  onChange={this.onChangeHandler}
                  required
                />
                {isError.email.length > 0 && (
                  <div className="invalid-feedback">{isError.email}</div>
                )}
              </div>
            </div>

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
                  defaultValue={this.state.username}
                  onChange={this.onChangeHandler}
                  required
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
                  defaultValue={this.state.password}
                  onChange={this.onChangeHandler}
                  required
                />
                {isError.password.length > 0 && (
                  <div className="invalid-feedback">{isError.password}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                <button className="btn btn-primary" type="submit" name="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          {success && (
            <p style={{ textAlign: "center", margin: "5px", color: "green" }}>
              {success}
            </p>
          )}
        </div>

        <div className="routeLink">
          <Link to="/home">Home</Link>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
