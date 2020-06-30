export const login = (logged, token, text) => {
  return {
    type: "LOGIN_SUCCESS",
    value: {
      logged,
      token,
      text,
    },
  };
};

export const loginError = (logged, error) => {
  return {
    type: "LOGIN_ERROR",
    value: {
      logged,
      error,
    },
  };
};

export const logout = (logged, token, text) => {
  return {
    type: "LOGIN_SUCCESS",
    value: {
      logged,
      token,
      text,
    },
  };
};
