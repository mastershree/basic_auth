import React from "react";
import { connect } from "react-redux";
import { LOGOUT } from "./reducers";

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      // console.log("Set Login flag called");
      dispatch({ type: LOGOUT });
    },
  };
};

const Logout = (props) => (
  <div style={{ textAlign: "right" }}>
    <button className="btn btn-danger" onClick={props.logout}>
      Logout
    </button>
  </div>
);

export default connect(null, mapDispatchToProps)(Logout);
