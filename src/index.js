import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";

let initialState = {
  name: "",
  contact: "",
  email: "",
  username: "",
  password: "",
  isLoggedIn: false,
};

const persistedState = localStorage.getItem("reduxState");

if (persistedState) {
  initialState = JSON.parse(persistedState);
}

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
