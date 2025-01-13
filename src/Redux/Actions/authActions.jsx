export const login = (email, password, admins) => {
  return {
    type: "LOGIN",
    payload: { email, password , admins},
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};