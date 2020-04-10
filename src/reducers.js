export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const UPDATE = "UPDATE";

const initialState = {
  name: "",
  contact: "",
  email: "",
  username: "",
  password: "",
  isLoggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      console.log(action.payload.name);
      return {
        ...state,
        name: action.payload.name,
        contact: action.payload.contact,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "LOGIN":
      //console.log("hey");
      return { ...state, isLoggedIn: true };
    case "UPDATE":
      return {
        ...state,
        name: action.payload.name,
        contact: action.payload.contact,
        email: action.payload.email,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default auth;
