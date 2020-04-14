export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const UPDATE = "UPDATE";
export const LOGOUT = "LOGOUT";

const auth = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        name: action.payload.name,
        contact: action.payload.contact,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: false,
      };

    case "LOGIN":
      //console.log("hey");
      return { ...state, isLoggedIn: true };

    case "LOGOUT":
      //console.log("hey");
      return { ...state, isLoggedIn: false };
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
