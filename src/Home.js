import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    name: state.name,
    contact: state.contact,
    email: state.email,
    username: state.username,
  };
};

const Home = (props) => (
  <div className="jumbotron">
    <h3 className="title">Home Page</h3>
    <h5 style={{ color: "brown" }}>Hello {props.username},</h5> <br />
    <div
      className="card"
      style={{ margin: "20px", padding: "20px", width: "28rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">Your Profile Info:</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {props.name}</li>
          <li className="list-group-item">Contact: {props.contact}</li>
          <li className="list-group-item">Email: {props.email}</li>
        </ul>
      </div>
    </div>
    <Link to="/edit">Click to Edit Details</Link>
  </div>
);

export default connect(mapStateToProps)(Home);
