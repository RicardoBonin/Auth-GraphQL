const INITIAL_STATE = {
  token: "",
  logged: false,
  error: false,
  text: "",
};
const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        logged: action.value,
        token: action.value,
        text: action.value,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        logged: false,
        error: true,
      };

    case "LOGOUT":
      return {
        ...state,
        logged: action.value,
        token: action.value,
        text: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
